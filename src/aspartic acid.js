import  {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls, Html} from "@react-three/drei";

function D(props){
  const {scene} = useGLTF("/D.glb");
  return <primitive object={scene}{...props}/>
}

function LoadD({ onBackClick }) {

    return (
      <Canvas dpr={[1,2]} shadows camera={{fov:45}} style={{"position":"absolute"}}>
        <color attach="background" args={["#4792CC"]}/>
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI/4]}>
          <Stage environment={"sunset"}>
            <D scale={0.7} />
          </Stage>
        </PresentationControls>

        <Html position={[0, 0, 0]}>
        <div style={{ position: 'absolute', top: -400, left: 460, width: '450px', height: '300px', color: 'white' }}>
        <button onClick={onBackClick} style={{
                borderRadius: '10px', // Adjust the value to control the roundness of the corners
                padding: '10px', // Add padding for better aesthetics
                backgroundColor: '#1061e3', // Change the background color if needed
                color: 'white', // Set text color
                border: 'none', // Remove border
                cursor: 'pointer', // Add cursor pointer for better UX
        }} >Back to Amino Acid List</button>
          <p>
            <strong>Aspartic acid (symbol Asp or D, the ionic form is known as aspartate)</strong>, 
            is an α-amino acid that is used in the biosynthesis of proteins.
            The L-isomer of aspartic acid is one of the 22 proteinogenic amino acids, i.e., 
            the building blocks of proteins. D-aspartic acid is one of two D-amino acids commonly found in mammals.
            Apart from a few rare exceptions, D-aspartic acid is not used for protein synthesis but is incorporated 
            into some peptides and plays a role as a neurotransmitter/neuromodulator.
          </p>
        </div>
      </Html>
      </Canvas>
      
    );
  }
  
  export default LoadD;