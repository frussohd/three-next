import * as THREE from 'three';
//import alphaTexture from '../../../../assets/textures/stripes_gradient.jpg';

export default (scene) => {
  const speed = 2;

  const reps = 4;
  const x = 0;
  const y = 0;
  const z = 0;
  const ws = 0;
  const hs = 0;
  const ds = 0;
  const aaa = 0;
  const defaultSx = 2;
  const defaultSy = 2;
  const defaultColor = { color: 0x00ff00 };

  const geometry = new THREE.BoxGeometry(2.4, 1.2, 0.1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // const loader = new THREE.CubeTextureLoader();
  // loader.setPath( 'textures/cube/pisa/' );

  // const textureCube = loader.load( [
  //   'px.png', 'nx.png',
  //   'py.png', 'ny.png',
  //   'pz.png', 'nz.png'
  // ] );

  // const matty = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } );
  // const cube = new THREE.Mesh(geometry, matty);
  // scene.add(cube);

  // material = new THREE.MeshPhongMaterial( { map : texture } );
  // const dice = new THREE.Mesh( new THREE.BoxGeometry ( 2.4, 1.2, 0.1, 1, 1, 1 ), materials );
  // scene.add(dice);

  // const cube2 = new THREE.Mesh( geometry, material );
  // // scene.add( cube2 );

  function spawnUi(id, x, y, sx, sy, color) {
    id = new THREE.BoxGeometry(sx, sy, 0.1);
    const material = new THREE.MeshBasicMaterial(color);
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = x;
    cube.position.y = y - 2;
    scene.add(cube);
  }

  function update(time) {
    const angle = time * speed;

    for (let i = 0; i < reps; i++) {
      spawnUi(aaa, 2, i * 1.5, defaultSx, defaultSy, defaultColor);
    }

    if (x > -1) {
      cube.position.x = 1;
      cube.position.y = -1.5;
      cube.position.z = -1;
      cube.rotation.y = cube.rotation.y + 0.01;
    }
    // cube.rotation.z = angle;
    // cube.rotation.x = angle;
    // cube.rotation.y = angle;
  }

  return {
    update,
  };
};
