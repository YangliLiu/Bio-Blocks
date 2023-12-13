import  {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls, Html} from "@react-three/drei";
import { storage } from './firebase';
import { ref, getDownloadURL } from 'firebase/storage';

function S(props){
  const {scene} = useGLTF("/S.glb");
  return <primitive object={scene}{...props}/>
}

function LoadS({ onBackClick }) {
  const handleDownloadZip = async () => {
    try {
      const serineRef = ref(storage, 'serine.zip'); // Adjust the path accordingly
      const downloadUrl = await getDownloadURL(serineRef);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'serine.zip';
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
            <S scale={0.7} />
          </Stage>
        </PresentationControls>

        <Html position={[0, 0, 0]}>
        <div style={{ position: 'absolute', top: -360, left: 360, width: '360px', height: '300px', color: 'white' }}>
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
            <strong>Serine (symbol Ser or S)</strong>is an α-amino acid that is used in the biosynthesis of proteins. 
            It contains an α-amino group (which is in the protonated −NH+3 form under biological conditions), a carboxyl group 
            (which is in the deprotonated −COO−form under biological conditions), and a side chain consisting of a hydroxymethyl group, 
            classifying it as a polar amino acid. It can be synthesized in the human body under normal physiological circumstances, 
            making it a nonessential amino acid. It is encoded by the codons UCU, UCC, UCA, UCG, AGU and AGC.
          </p>
        </div>
      </Html>
      </Canvas>
      
    );
  }
  
  export default LoadS;
