import  {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls, Html} from "@react-three/drei";

function P(props){
  const {scene} = useGLTF("/P.glb");
  return <primitive object={scene}{...props}/>
}

function LoadP({ onBackClick }) {

    return (
      <Canvas dpr={[1,2]} shadows camera={{fov:45}} style={{"position":"absolute"}}>
        <color attach="background" args={["#88A52D"]}/>
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI/4]}>
          <Stage environment={"sunset"}>
            <P scale={0.6} />
          </Stage>
        </PresentationControls>

        <Html position={[0, 0, 0]}>
        <div style={{ position: 'absolute', top: 100, right: 400, width: '450px', height: '300px', color: 'white' }}>
        <button onClick={onBackClick} style={{
                borderRadius: '10px', // Adjust the value to control the roundness of the corners
                padding: '10px', // Add padding for better aesthetics
                backgroundColor: '#449D09', // Change the background color if needed
                color: 'white', // Set text color
                border: 'none', // Remove border
                cursor: 'pointer', // Add cursor pointer for better UX
        }} >Back to Amino Acid List</button>
          <p>
            <strong>Proline (symbol Pro or P)</strong>is an organic acid classed as a proteinogenic amino acid 
            (used in the biosynthesis of proteins), although it does not contain the amino group -NH2 but is 
            rather a secondary amine. The secondary amine nitrogen is in the protonated form (NH2+) under 
            biological conditions, while the carboxyl group is in the deprotonated −COO− form. 
            The "side chain" from the α carbon connects to the nitrogen forming a pyrrolidine loop, 
            classifying it as a aliphatic amino acid. It is non-essential in humans, meaning the body can synthesize it from the non-essential amino acid L-glutamate. 
            It is encoded by all the codons starting with CC (CCU, CCC, CCA, and CCG).
          </p>
        </div>
      </Html>
      </Canvas>
      
    );
  }
  
  export default LoadP;
