import  {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls, Html} from "@react-three/drei";

function L(props){
  const {scene} = useGLTF("/L.glb");
  return <primitive object={scene}{...props}/>
}

function LoadL({ onBackClick }) {

    return (
      <Canvas dpr={[1,2]} shadows camera={{fov:45}} style={{"position":"absolute"}}>
        <color attach="background" args={["#BF4E6F"]}/>
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI/4]}>
          <Stage environment={"sunset"}>
            <L scale={0.6} />
          </Stage>
        </PresentationControls>

        <Html position={[0, 0, 0]}>
        <div style={{ position: 'absolute', top: -400, left: 460, width: '480px', height: '300px', color: 'white' }}>
        <button onClick={onBackClick} style={{
                borderRadius: '10px', // Adjust the value to control the roundness of the corners
                padding: '10px', // Add padding for better aesthetics
                backgroundColor: '#C61C57', // Change the background color if needed
                color: 'white', // Set text color
                border: 'none', // Remove border
                cursor: 'pointer', // Add cursor pointer for better UX
        }} >Back to Amino Acid List</button>
          <p>
            <strong>Leucine (symbol Leu or L)</strong> is an essential amino acid that is used in the biosynthesis of 
            proteins. Leucine is an α-amino acid, meaning it contains an α-amino group (which is in the protonated −NH3+ 
            form under biological conditions), an α-carboxylic acid group (which is in the deprotonated −COO− form under 
            biological conditions), and a side chain isobutyl group, making it a non-polar aliphatic amino acid. 
            It is essential in humans, meaning the body cannot synthesize it: it must be obtained from the diet. 
            Human dietary sources are foods that contain protein, such as meats, dairy products, soy products, and beans 
            and other legumes. It is encoded by the codons UUA, UUG, CUU, CUC, CUA, and CUG.
          </p>
        </div>
      </Html>
      </Canvas>
      
    );
  }
  
  export default LoadL;
