import  {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls, Html} from "@react-three/drei";
import { storage } from './firebase';
import { ref, getDownloadURL } from 'firebase/storage';

function Q(props){
  const {scene} = useGLTF("/Q.glb");
  return <primitive object={scene}{...props}/>
}

function LoadQ({ onBackClick }) {
  const handleDownloadZip = async () => {
    try {
      const glutamineRef = ref(storage, 'glutamine.zip'); // Adjust the path accordingly
      const downloadUrl = await getDownloadURL(glutamineRef);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'glutamine.zip';
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
            <Q scale={0.7} />
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
            <strong>Glutamine (symbol Gln or Q)</strong>, is an α-amino acid that is used in the biosynthesis of proteins. 
            Its side chain is similar to that of glutamic acid, except the carboxylic acid group is replaced by an amide. 
            It is classified as a charge-neutral, polar amino acid. It is non-essential and conditionally essential in 
            humans, meaning the body can usually synthesize sufficient amounts of it, but in some instances of stress, 
            the body's demand for glutamine increases, and glutamine must be obtained from the diet. 
            It is encoded by the codons CAA and CAG.
          </p>
        </div>
      </Html>
      </Canvas>
      
    );
  }
  
  export default LoadQ;
