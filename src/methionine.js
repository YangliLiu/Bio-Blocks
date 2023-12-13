import  {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls, Html} from "@react-three/drei";
import { storage } from './firebase';
import { ref, getDownloadURL } from 'firebase/storage';

function M(props){
  const {scene} = useGLTF("/M.glb");
  return <primitive object={scene}{...props}/>
}

function LoadM({ onBackClick }) {
  const handleDownloadZip = async () => {
    try {
      const methionineRef = ref(storage, 'methionine.zip'); // Adjust the path accordingly
      const downloadUrl = await getDownloadURL(methionineRef);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'methionine.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error getting download URL:', error);
    }
  };

    return (
      <Canvas dpr={[1,2]} shadows camera={{fov:45}} style={{"position":"absolute"}}>
        <color attach="background" args={["#88A52D"]}/>
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI/4]}>
          <Stage environment={"sunset"}>
            <M scale={0.55} />
          </Stage>
        </PresentationControls>

        <Html position={[0, 0, 0]}>
        <div style={{ position: 'absolute', top: -350, left: 400, width: '360px', height: '300px', color: 'white' }}>
        <button onClick={onBackClick} style={{
                borderRadius: '10px', // Adjust the value to control the roundness of the corners
                padding: '10px', // Add padding for better aesthetics
                backgroundColor: '#449D09', // Change the background color if needed
                color: 'white', // Set text color
                border: 'none', // Remove border
                cursor: 'pointer', // Add cursor pointer for better UX
        }} >Back to Amino Acid List</button>
        <button
            onClick={handleDownloadZip}
            style={{
              borderRadius: '10px',
              padding: '10px',
              backgroundColor: '#449D09',
              color: 'white',
              border: 'none',
              marginLeft: '10px',
              cursor: 'pointer',
            }}
          >
            Download Lego Set</button>
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
