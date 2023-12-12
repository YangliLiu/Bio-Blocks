import  {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls, Html} from "@react-three/drei";
import { storage } from './firebase';
import { ref, getDownloadURL } from 'firebase/storage';

function N(props){
  const {scene} = useGLTF("/N.glb");
  return <primitive object={scene}{...props}/>
}

function LoadN({ onBackClick }) {
  const handleDownloadZip = async () => {
    try {
      const asparagineRef = ref(storage, 'asparagine.zip'); // Adjust the path accordingly
      const downloadUrl = await getDownloadURL(asparagineRef);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'asparagine.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error getting download URL:', error);
    }
  };

    return (
      <Canvas dpr={[1,2]} shadows camera={{fov:45}} style={{"position":"absolute"}}>
        <color attach="background" args={["#4792CC"]}/>
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI/4]}>
          <Stage environment={"sunset"}>
            <N scale={0.7} />
          </Stage>
        </PresentationControls>

        <Html position={[0, 0, 0]}>
        <div style={{ position: 'absolute', top: -400, left: 460, width: '450px', height: '300px', color: 'white' }}>
        <button onClick={onBackClick} style={{
                borderRadius: '10px', // Adjust the value to control the roundness of the corners
                padding: '10px', // Add padding for better aesthetics
                backgroundColor: '#1061e3', // Change the background color if needed
                color: 'white', // Set text color
                border: 'none', // Remove border
                cursor: 'pointer', // Add cursor pointer for better UX
        }} >Back to Amino Acid List</button>
        <button
            onClick={handleDownloadZip}
            style={{
              borderRadius: '10px',
              padding: '10px',
              backgroundColor: '#1061e3',
              color: 'white',
              border: 'none',
              marginLeft: '10px',
              cursor: 'pointer',
            }}
          >
            Download Lego Set</button>
          <p>
            <strong>Asparagine (symbol Asn or N)</strong>,  is an α-amino acid that is used in the biosynthesis of proteins. 
            It contains an α-amino group (which is in the protonated −NH+3 form nder biological conditions), 
            an α-carboxylic acid group (which is in the deprotonated −COO− form under biological conditions), 
            and a side chain carboxamide, classifying it as a polar (at physiological pH), aliphatic amino acid. 
            It is non-essential in humans, meaning the body can synthesize it. 
            It is encoded by the codons AAU and AAC.
          </p>
        </div>
      </Html>
      </Canvas>
      
    );
  }
  
  export default LoadN;
