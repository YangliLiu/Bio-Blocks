import  {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls, Html} from "@react-three/drei";
import { storage } from './firebase';
import { ref, getDownloadURL } from 'firebase/storage';

function C(props){
  const {scene} = useGLTF("/C.glb");
  return <primitive object={scene}{...props}/>
}

function LoadC({ onBackClick }) {
  const handleDownloadZip = async () => {
    try {
      const cysteineRef = ref(storage, 'cysteine.zip'); // Adjust the path accordingly
      const downloadUrl = await getDownloadURL(cysteineRef);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'cysteine.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error getting download URL:', error);
    }
  };


    return (
      <Canvas dpr={[1,2]} shadows camera={{fov:45}} style={{"position":"absolute"}}>
        <color attach="background" args={["#7F88D5"]}/>
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI/4]}>
          <Stage environment={"sunset"}>
            <C scale={0.7} />
          </Stage>
        </PresentationControls>

        <Html position={[0, 0, 0]}>
        <div style={{ position: 'absolute', top: -360, left: 400, width: '360px', height: '300px', color: 'white' }}>
        <button onClick={onBackClick} style={{
                borderRadius: '10px', // Adjust the value to control the roundness of the corners
                padding: '10px', // Add padding for better aesthetics
                backgroundColor: '#654EBF', // Change the background color if needed
                color: 'white', // Set text color
                border: 'none', // Remove border
                cursor: 'pointer', // Add cursor pointer for better UX
        }} >Back to Amino Acid List</button>
        <button
            onClick={handleDownloadZip}
            style={{
              borderRadius: '10px',
              padding: '10px',
              backgroundColor: '#654EBF',
              color: 'white',
              border: 'none',
              marginLeft: '10px',
              cursor: 'pointer',
            }}
          >
            Download Lego Set</button>
          <p>
            <strong>Cysteine (symbol Cys or C)</strong>, is a semiessential proteinogenic amino acid 
            with the formula HOOC−CH(−NH2)−CH2−SH. The thiol side chain in cysteine often participates 
            in enzymatic reactions as a nucleophile. Cysteine is chiral, with only L-cysteine being found in nature.
            The thiol is susceptible to oxidation to give the disulfide derivative cystine, which serves an important structural role in many proteins. 
            In this case, the symbol Cyx is sometimes used.
            The deprotonated form can generally be described by the symbol Cym as well.
          </p>
        </div>
      </Html>
      </Canvas>
      
    );
  }
  
  export default LoadC;
