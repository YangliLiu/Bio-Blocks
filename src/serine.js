import  {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls, Html} from "@react-three/drei";

function S(props){
  const {scene} = useGLTF("/S.glb");
  return <primitive object={scene}{...props}/>
}

function LoadS({ onBackClick }) {

    return (
      <Canvas dpr={[1,2]} shadows camera={{fov:45}} style={{"position":"absolute"}}>
        <color attach="background" args={["#88A52D"]}/>
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI/4]}>
          <Stage environment={"sunset"}>
            <S scale={0.7} />
          </Stage>
        </PresentationControls>

        <Html position={[0, 0, 0]}>
        <div style={{ position: 'absolute', top: -400, left: 460, width: '450px', height: '300px', color: 'white' }}>
        <button onClick={onBackClick} style={{
                borderRadius: '10px', // Adjust the value to control the roundness of the corners
                padding: '10px', // Add padding for better aesthetics
                backgroundColor: '#449D09', // Change the background color if needed
                color: 'white', // Set text color
                border: 'none', // Remove border
                cursor: 'pointer', // Add cursor pointer for better UX
        }} >Back to Amino Acid List</button>
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
