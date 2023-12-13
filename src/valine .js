import  {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls, Html} from "@react-three/drei";
import { storage } from './firebase';
import { ref, getDownloadURL } from 'firebase/storage';

function V(props){
  const {scene} = useGLTF("/V.glb");
  return <primitive object={scene}{...props}/>
}

function LoadV({ onBackClick }) {
  const handleDownloadZip = async () => {
    try {
      const valineRef = ref(storage, 'valine.zip'); // Adjust the path accordingly
      const downloadUrl = await getDownloadURL(valineRef);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'valine.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error getting download URL:', error);
    }
  };

    return (
      <Canvas dpr={[1,2]} shadows camera={{fov:45}} style={{"position":"absolute"}}>
        <color attach="background" args={["#3EA699"]}/>
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI/4]}>
          <Stage environment={"sunset"}>
            <V scale={0.6} />
          </Stage>
        </PresentationControls>

        <Html position={[0, 0, 0]}>
        <div style={{ position: 'absolute', top: -360, left: 400, width: '360px', height: '300px', color: 'white' }}>
        <button onClick={onBackClick} style={{
                borderRadius: '10px', // Adjust the value to control the roundness of the corners
                padding: '10px', // Add padding for better aesthetics
                backgroundColor: '#068188', // Change the background color if needed
                color: 'white', // Set text color
                border: 'none', // Remove border
                cursor: 'pointer', // Add cursor pointer for better UX
        }} >Back to Amino Acid List</button>
        <button
            onClick={handleDownloadZip}
            style={{
              borderRadius: '10px',
              padding: '10px',
              backgroundColor: '#068188',
              color: 'white',
              border: 'none',
              marginLeft: '10px',
              cursor: 'pointer',
            }}
          >
            Download Lego Set</button>
          <p>
            <strong>Valine (symbol Val or V)</strong> is an α-amino acid that is used in the biosynthesis of proteins. 
            It contains an α-amino group (which is in the protonated −NH3+ form under biological conditions), 
            an α-carboxylic acid group (which is in the deprotonated −COO− form under biological conditions), 
            and a side chain isopropyl group, making it a non-polar aliphatic amino acid. It is essential in humans, 
            meaning the body cannot synthesize it: it must be obtained from the diet. 
            Human dietary sources are foods that contain protein, such as meats, dairy products, soy products, beans and legumes. 
            It is encoded by all codons starting with GU (GUU, GUC, GUA, and GUG).
          </p>
        </div>
      </Html>
      </Canvas>
      
    );
  }
  
  export default LoadV;
