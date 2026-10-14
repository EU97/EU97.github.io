// Genera la pieza de prueba del visor 3D: brida con cubo, chavetero y nervios (mm, Z arriba).
// Uso: npm i --no-save --prefix <dir> three@0.128.0
//      THREE_DIR=<dir>/node_modules/three node tools/make-test-part.mjs
// Salida: models/pruebas/brida-eu97.stl (STL binario). Es un activo de prueba; los CAD reales llegan después.
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const spec = sub => (process.env.THREE_DIR ? pathToFileURL(path.join(process.env.THREE_DIR, sub)).href : `three/${sub}`);
const THREE = await import(spec('build/three.module.js'));
const { STLExporter } = await import(spec('examples/jsm/exporters/STLExporter.js'));

const P = {
  flangeR: 42, flangeT: 8, boreR: 11,
  bolts: 6, boltPcd: 32, boltR: 3.6,
  hubR: 18, hubH: 26, keyW: 5, keyD: 2.8,
  ribs: 3, ribT: 3.5, ribH: 14,
  seg: 64
};

const circle = (r, cx = 0, cy = 0, cw = true) => {
  const p = new THREE.Path();
  p.absarc(cx, cy, r, 0, Math.PI * 2, !cw);
  return p;
};

// Brida: disco con barreno central y círculo de pernos.
const flange = new THREE.Shape();
flange.absarc(0, 0, P.flangeR, 0, Math.PI * 2, false);
flange.holes.push(circle(P.boreR));
for (let i = 0; i < P.bolts; i++) {
  const a = (i / P.bolts) * Math.PI * 2;
  flange.holes.push(circle(P.boltR, P.boltPcd * Math.cos(a), P.boltPcd * Math.sin(a)));
}
const flangeGeo = new THREE.ExtrudeGeometry(flange, {
  depth: P.flangeT, curveSegments: P.seg, bevelEnabled: true, bevelThickness: .8, bevelSize: .8, bevelSegments: 2
});

// Cubo: anillo con chavetero rectangular en el barreno.
const hub = new THREE.Shape();
hub.absarc(0, 0, P.hubR, 0, Math.PI * 2, false);
const bore = new THREE.Path();
const half = P.keyW / 2;
const a0 = Math.asin(half / P.boreR);
bore.moveTo(P.boreR * Math.cos(a0), half);
bore.absarc(0, 0, P.boreR, a0, Math.PI * 2 - a0, false);
bore.lineTo(P.boreR + P.keyD, -half);
bore.lineTo(P.boreR + P.keyD, half);
bore.closePath();
hub.holes.push(bore);
const hubGeo = new THREE.ExtrudeGeometry(hub, { depth: P.hubH, curveSegments: P.seg, bevelEnabled: false });
hubGeo.translate(0, 0, P.flangeT);

// Nervios triangulares entre cubo y brida, intercalados con los pernos.
const ribShape = new THREE.Shape();
ribShape.moveTo(P.hubR - .5, 0);
ribShape.lineTo(P.flangeR - 5, 0);
ribShape.lineTo(P.hubR - .5, P.ribH);
ribShape.closePath();

const group = new THREE.Group();
group.add(new THREE.Mesh(flangeGeo), new THREE.Mesh(hubGeo));
for (let i = 0; i < P.ribs; i++) {
  const g = new THREE.ExtrudeGeometry(ribShape, { depth: P.ribT, bevelEnabled: false });
  g.translate(0, 0, -P.ribT / 2);
  g.rotateX(Math.PI / 2);
  g.translate(0, 0, P.flangeT);
  g.rotateZ(((i + .5) / P.ribs) * Math.PI * 2 + Math.PI / P.bolts);
  group.add(new THREE.Mesh(g));
}
group.updateMatrixWorld(true);

const out = path.join(root, 'models', 'pruebas', 'brida-eu97.stl');
mkdirSync(path.dirname(out), { recursive: true });
const data = new STLExporter().parse(group, { binary: true });
writeFileSync(out, Buffer.from(data.buffer));
let tris = 0;
group.traverse(o => { if (o.isMesh) tris += o.geometry.index ? o.geometry.index.count / 3 : o.geometry.attributes.position.count / 3; });
console.log(`${path.relative(root, out)}: ${tris} triángulos, ${(data.byteLength / 1024).toFixed(0)} KB`);
