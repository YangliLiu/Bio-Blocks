import  {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls, Html} from "@react-three/drei";
import { storage } from './firebase';
import { ref, getDownloadURL } from 'firebase/storage';

function I(props){
  const {scene} = useGLTF("/I.glb");
  return <primitive object={scene}{...props}/>
}

function LoadI({ onBackClick }) {
  const handleDownloadZip = async () => {
    try {
      const isoleucineRef = ref(storage, 'isoleucine.zip'); // Adjust the path accordingly
      const downloadUrl = await getDownloadURL(isoleucineRef);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'isoleucine.zip';
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
            <I scale={0.6} />
          </Stage>
        </PresentationControls>

        <Html position={[0, 0, 0]}>
        <div style={{ position: 'absolute', top: -360, left: 420, width: '360px', height: '300px', color: 'white' }}>
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
            <strong>Isoleucine (symbol Ile or I)</strong>is an α-amino acid that is used in the biosynthesis of proteins. 
            It contains an α-amino group (which is in the protonated −NH+3 form under biological conditions), 
            an α-carboxylic acid group (which is in the deprotonated −COO− form under biological conditions), 
            and a hydrocarbon side chain with a branch (a central carbon atom bound to three other carbon atoms). 
            It is classified as a non-polar, uncharged (at physiological pH), branched-chain, aliphatic amino acid. 
            It is essential in humans, meaning the body cannot synthesize it. Essential amino acids are necessary in our diet. 
            In plants isoleucine can be synthesized from threonine and methionine. In plants and bacteria, isoleucine is synthesized 
            from pyruvate employing leucine biosynthesis enzymes. It is encoded by the codons AUU, AUC, and AUA.
          </p>
        </div>
      </Html>
      </Canvas>
      
    );
  }
  
  export default LoadI;
