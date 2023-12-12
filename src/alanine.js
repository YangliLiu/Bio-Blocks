import  {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls, Html} from "@react-three/drei";
import { storage } from './firebase';
import { ref, getDownloadURL } from 'firebase/storage';

function A(props){
  const {scene} = useGLTF("/A.glb");
  return <primitive object={scene}{...props}/>
}

function LoadA({ onBackClick }) {
  const handleDownloadZip = async () => {
    try {
      const alanineRef = ref(storage, 'alanine.zip'); // Adjust the path accordingly
      const downloadUrl = await getDownloadURL(alanineRef);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'alanine.zip';
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
            <A scale={0.7} />
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
            <strong>Alanine (symbol Ala or A)</strong>, or α-alanine, is an α-amino acid that is used in the biosynthesis
            of proteins. It contains an amine group and a carboxylic acid group, both attached to the central carbon atom
            which also carries a methyl group side chain. Consequently, its IUPAC systematic name is 2-aminopropanoic acid,
            and it is classified as a nonpolar, aliphatic α-amino acid. Under biological conditions, it exists in its
            zwitterionic form with its amine group protonated (as −NH3+) and its carboxyl group deprotonated (as −CO2−).
            It is non-essential to humans as it can be synthesized metabolically and does not need to be present in the
            diet. It is encoded by all codons starting with GC (GCU, GCC, GCA, and GCG).
          </p>
        </div>
      </Html>
      </Canvas>
      
    );
  }
  
  export default LoadA;
