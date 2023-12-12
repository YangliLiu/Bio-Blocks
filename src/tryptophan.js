import  {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls, Html} from "@react-three/drei";
import { storage } from './firebase';
import { ref, getDownloadURL } from 'firebase/storage';

function W(props){
  const {scene} = useGLTF("/W.glb");
  return <primitive object={scene}{...props}/>
}

function LoadW({ onBackClick }) {
  const handleDownloadZip = async () => {
    try {
      const tryptophanRef = ref(storage, 'tryptophan.zip'); // Adjust the path accordingly
      const downloadUrl = await getDownloadURL(tryptophanRef);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'tryptophan.zip';
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
            <W scale={0.5} />
          </Stage>
        </PresentationControls>

        <Html position={[0, 0, 0]}>
        <div style={{ position: 'absolute', top: 200, left: 460, width: '450px', height: '300px', color: 'white' }}>
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
            <strong>Tryptophan (symbol Trp or W)</strong>is an α-amino acid that is used in the biosynthesis of proteins. 
            Tryptophan contains an α-amino group, an α-carboxylic acid group, and a side chain indole, making it a polar 
            molecule with a non-polar aromatic beta carbon substituent. Tryptophan is also a precursor to the 
            neurotransmitter serotonin, the hormone melatonin, and vitamin B3. It is encoded by the codon UGG.
            Humans and many animals cannot synthesize tryptophan: they need to obtain it through their diet, making it an essential amino acid.
          </p>
        </div>
      </Html>
      </Canvas>
      
    );
  }
  
  export default LoadW;
