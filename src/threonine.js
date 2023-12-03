import  {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls, Html} from "@react-three/drei";

function T(props){
  const {scene} = useGLTF("/T.glb");
  return <primitive object={scene}{...props}/>
}

function LoadT({ onBackClick }) {

    return (
      <Canvas dpr={[1,2]} shadows camera={{fov:45}} style={{"position":"absolute"}}>
        <color attach="background" args={["#3EA699"]}/>
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI/4]}>
          <Stage environment={"sunset"}>
            <T scale={0.7} />
          </Stage>
        </PresentationControls>

        <Html position={[0, 0, 0]}>
        <div style={{ position: 'absolute', top: -400, left: 460, width: '450px', height: '300px', color: 'white' }}>
        <button onClick={onBackClick} style={{
                borderRadius: '10px', // Adjust the value to control the roundness of the corners
                padding: '10px', // Add padding for better aesthetics
                backgroundColor: '#068188', // Change the background color if needed
                color: 'white', // Set text color
                border: 'none', // Remove border
                cursor: 'pointer', // Add cursor pointer for better UX
        }} >Back to Amino Acid List</button>
          <p>
            <strong>Threonine (symbol Thr or T)</strong> is an amino acid that is used in the biosynthesis of proteins. 
            It contains an α-amino group (which is in the protonated −NH+3 form under biological conditions), 
            a carboxyl group (which is in the deprotonated −COO− form under biological conditions), and a side chain 
            containing a hydroxyl group, making it a polar, uncharged amino acid. It is essential in humans, meaning the body cannot synthesize it: 
            it must be obtained from the diet. Threonine is synthesized from aspartate in bacteria such as E. coli.
            It is encoded by all the codons starting AC (ACU, ACC, ACA, and ACG).
          </p>
        </div>
      </Html>
      </Canvas>
      
    );
  }
  
  export default LoadT;
