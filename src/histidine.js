import  {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls, Html} from "@react-three/drei";

function H(props){
  const {scene} = useGLTF("/H.glb");
  return <primitive object={scene}{...props}/>
}

function LoadH({ onBackClick }) {

    return (
      <Canvas dpr={[1,2]} shadows camera={{fov:45}} style={{"position":"absolute"}}>
        <color attach="background" args={["#BF4E6F"]}/>
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI/4]}>
          <Stage environment={"sunset"}>
            <H scale={0.58} />
          </Stage>
        </PresentationControls>

        <Html position={[0, 0, 0]}>
        <div style={{ position: 'absolute', top: -440, left: 400, width: '500px', height: '400px', color: 'white' }}>
        <button onClick={onBackClick} style={{
                borderRadius: '10px', // Adjust the value to control the roundness of the corners
                padding: '10px', // Add padding for better aesthetics
                backgroundColor: '#C61C57', // Change the background color if needed
                color: 'white', // Set text color
                border: 'none', // Remove border
                cursor: 'pointer', // Add cursor pointer for better UX
        }} >Back to Amino Acid List</button>
          <p>
            <strong>Histidine (symbol His or H)</strong> is an essential amino acid that is used in the biosynthesis of proteins. 
            It contains an α-amino group (which is in the protonated –NH3+ form under biological conditions), 
            a carboxylic acid group (which is in the deprotonated –COO− form under biological conditions), and an imidazole
             side chain (which is partially protonated), classifying it as a positively charged amino acid at physiological
              pH. Initially thought essential only for infants, it has now been shown in longer-term studies to be essential for adults also. 
            It is encoded by the codons CAU and CAC. Histidine was first isolated by Albrecht Kossel and Sven Gustaf Hedin in 1896.
            It is also a precursor to histamine, a vital inflammatory agent in immune responses. The acyl radical is histidyl.
          </p>
        </div>
      </Html>
      </Canvas>
      
    );
  }
  
  export default LoadH;
