import  {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls, Html} from "@react-three/drei";
import { storage } from './firebase';
import { ref, getDownloadURL } from 'firebase/storage';

function Y(props){
  const {scene} = useGLTF("/Y.glb");
  return <primitive object={scene}{...props}/>
}

function LoadY({ onBackClick }) {
  const handleDownloadZip = async () => {
    try {
      const tyrosineRef = ref(storage, 'tyrosine.zip'); // Adjust the path accordingly
      const downloadUrl = await getDownloadURL(tyrosineRef);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'tyrosine.zip';
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
            <Y scale={0.6} />
          </Stage>
        </PresentationControls>

        <Html position={[0, 0, 0]}>
        <div style={{ position: 'absolute', top: 100, left: 460, width: '360px', height: '300px', color: 'white' }}>
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
            <strong>L-Tyrosine or tyrosine (symbol Tyr or Y)</strong>, or 4-hydroxyphenylalanine is one of the 
            20 standard amino acids that are used by cells to synthesize proteins. It is a non-essential amino acid 
            with a polar side group. The word "tyrosine" is from the Greek tyrós, meaning cheese, as it was first 
            discovered in 1846 by German chemist Justus von Liebig in the protein casein from cheese.
            It is called tyrosyl when referred to as a functional group or side chain. While tyrosine is generally 
            classified as a hydrophobic amino acid, it is more hydrophilic than phenylalanine.
            It is encoded by the codons UAC and UAU in messenger RNA.
          </p>
        </div>
      </Html>
      </Canvas>
      
    );
  }
  
  export default LoadY;
