import  {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls, Html} from "@react-three/drei";

function E(props){
  const {scene} = useGLTF("/E.glb");
  return <primitive object={scene}{...props}/>
}

function LoadE({ onBackClick }) {

    return (
      <Canvas dpr={[1,2]} shadows camera={{fov:45}} style={{"position":"absolute"}}>
        <color attach="background" args={["#7F88D5"]}/>
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI/4]}>
          <Stage environment={"sunset"}>
            <E scale={0.6} />
          </Stage>
        </PresentationControls>

        <Html position={[0, 0, 0]}>
        <div style={{ position: 'absolute', top: -400, left: 460, width: '450px', height: '300px', color: 'white' }}>
        <button onClick={onBackClick} style={{
                borderRadius: '10px', // Adjust the value to control the roundness of the corners
                padding: '10px', // Add padding for better aesthetics
                backgroundColor: '#654EBF', // Change the background color if needed
                color: 'white', // Set text color
                border: 'none', // Remove border
                cursor: 'pointer', // Add cursor pointer for better UX
        }} >Back to Amino Acid List</button>
          <p>
            <strong>Glutamic acid (symbol Glu or E, the anionic form is known as glutamate)</strong>is an α-amino acid that 
            is used by almost all living beings in the biosynthesis of proteins. It is a non-essential nutrient for humans,
             meaning that the human body can synthesize enough for its use. It is also the most abundant excitatory 
             neurotransmitter in the vertebrate nervous system. It serves as the precursor for the synthesis of the 
             inhibitory gamma-aminobutyric acid (GABA) in GABAergic neurons. Glutamic acid exists in three optically isomeric forms; 
             the dextrorotatory l-form is usually obtained by hydrolysis of gluten or from the waste waters of beet-sugar manufacture or by fermentation.
          </p>
        </div>
      </Html>
      </Canvas>
      
    );
  }
  
  export default LoadE;
