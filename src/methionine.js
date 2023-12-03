import  {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls, Html} from "@react-three/drei";

function M(props){
  const {scene} = useGLTF("/M.glb");
  return <primitive object={scene}{...props}/>
}

function LoadM({ onBackClick }) {

    return (
      <Canvas dpr={[1,2]} shadows camera={{fov:45}} style={{"position":"absolute"}}>
        <color attach="background" args={["#88A52D"]}/>
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI/4]}>
          <Stage environment={"sunset"}>
            <M scale={0.6} />
          </Stage>
        </PresentationControls>

        <Html position={[0, 0, 0]}>
        <div style={{ position: 'absolute', top: -400, left: 460, width: '450px', height: '300px', color: 'white' }}>
        <button onClick={onBackClick} style={{
                borderRadius: '10px', // Adjust the value to control the roundness of the corners
                padding: '10px', // Add padding for better aesthetics
                backgroundColor: '#449D09', // Change the background color if needed
                color: 'white', // Set text color
                border: 'none', // Remove border
                cursor: 'pointer', // Add cursor pointer for better UX
        }} >Back to Amino Acid List</button>
          <p>
            <strong>Methionine (symbol Met or M)</strong>is an essential amino acid in humans. 
            As the precursor of other non-essential amino acids such as cysteine and taurine, 
            versatile compounds such as SAM-e, and the important antioxidant glutathione, methionine plays 
            a critical role in the metabolism and health of many species, including humans. 
            Methionine is also involved in angiogenesis and various processes related to DNA transcription, 
            epigenetic expression, and gene regulation. Methionine was first isolated in 1921 by John Howard Mueller.
            It is encoded by the codon AUG.
          </p>
        </div>
      </Html>
      </Canvas>
      
    );
  }
  
  export default LoadM;
