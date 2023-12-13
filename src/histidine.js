import  {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls, Html} from "@react-three/drei";
import { storage } from './firebase';
import { ref, getDownloadURL } from 'firebase/storage';

function H(props){
  const {scene} = useGLTF("/H.glb");
  return <primitive object={scene}{...props}/>
}

function LoadH({ onBackClick }) {
  const handleDownloadZip = async () => {
    try {
      const histidineRef = ref(storage, 'histidine.zip'); // Adjust the path accordingly
      const downloadUrl = await getDownloadURL(histidineRef);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'histidine.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error getting download URL:', error);
    }
  };
    return (
      <Canvas dpr={[1,2]} shadows camera={{fov:45}} style={{"position":"absolute"}}>
        <color attach="background" args={["#BF4E6F"]}/>
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI/4]}>
          <Stage environment={"sunset"}>
            <H scale={0.58} />
          </Stage>
        </PresentationControls>

        <Html position={[0, 0, 0]}>
        <div style={{ position: 'absolute', top: -380, left: 400, width: '385px', height: '300px', color: 'white' }}>
        <button onClick={onBackClick} style={{
                borderRadius: '10px', // Adjust the value to control the roundness of the corners
                padding: '10px', // Add padding for better aesthetics
                backgroundColor: '#C61C57', // Change the background color if needed
                color: 'white', // Set text color
                border: 'none', // Remove border
                cursor: 'pointer', // Add cursor pointer for better UX
        }} >Back to Amino Acid List</button>
        <button
            onClick={handleDownloadZip}
            style={{
              borderRadius: '10px',
              padding: '10px',
              backgroundColor: '#C61C57',
              color: 'white',
              border: 'none',
              marginLeft: '10px',
              cursor: 'pointer',
            }}
          >
            Download Lego Set</button>
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
