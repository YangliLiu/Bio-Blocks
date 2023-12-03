import  {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls, Html} from "@react-three/drei";

function K(props){
  const {scene} = useGLTF("/K.glb");
  return <primitive object={scene}{...props}/>
}

function LoadK({ onBackClick }) {

    return (
      <Canvas dpr={[1,2]} shadows camera={{fov:45}} style={{"position":"absolute"}}>
        <color attach="background" args={["#BF4E6F"]}/>
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI/4]}>
          <Stage environment={"sunset"}>
            <K scale={0.65} />
          </Stage>
        </PresentationControls>

        <Html position={[0, 0, 0]}>
        <div style={{ position: 'absolute', top: -400, left: 460, width: '450px', height: '300px', color: 'white' }}>
        <button onClick={onBackClick} style={{
                borderRadius: '10px', // Adjust the value to control the roundness of the corners
                padding: '10px', // Add padding for better aesthetics
                backgroundColor: '#C61C57', // Change the background color if needed
                color: 'white', // Set text color
                border: 'none', // Remove border
                cursor: 'pointer', // Add cursor pointer for better UX
        }} >Back to Amino Acid List</button>
          <p>
            <strong>Lysine (symbol Lys or K)</strong>is an α-amino acid that is a precursor to many proteins. 
            It contains an α-amino group (which is in the protonated −NH+3 form under biological conditions), 
            an α-carboxylic acid group (which is in the deprotonated −COO− form under biological conditions), 
            and a side chain lysyl ((CH2)4NH2), classifying it as a basic, charged (at physiological pH), 
            aliphatic amino acid. It is encoded by the codons AAA and AAG. Like almost all other amino acids, 
            the α-carbon is chiral and lysine may refer to either enantiomer or a racemic mixture of both. 
            For the purpose of this article, lysine will refer to the biologically active enantiomer L-lysine, 
            where the α-carbon is in the S configuration.
          </p>
        </div>
      </Html>
      </Canvas>
      
    );
  }
  
  export default LoadK;
