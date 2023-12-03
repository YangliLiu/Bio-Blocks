import  {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls, Html} from "@react-three/drei";

function F(props){
  const {scene} = useGLTF("/F.glb");
  return <primitive object={scene}{...props}/>
}

function LoadF({ onBackClick }) {

    return (
      <Canvas dpr={[1,2]} shadows camera={{fov:45}} style={{"position":"absolute"}}>
        <color attach="background" args={["#88A52D"]}/>
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI/4]}>
          <Stage environment={"sunset"}>
            <F scale={0.56} />
          </Stage>
        </PresentationControls>

        <Html position={[0, 0, 0]}>
        <div style={{ position: 'absolute', top: 160, left: 460, width: '450px', height: '300px', color: 'white' }}>
        <button onClick={onBackClick} style={{
                borderRadius: '10px', // Adjust the value to control the roundness of the corners
                padding: '10px', // Add padding for better aesthetics
                backgroundColor: '#449D09', // Change the background color if needed
                color: 'white', // Set text color
                border: 'none', // Remove border
                cursor: 'pointer', // Add cursor pointer for better UX
        }} >Back to Amino Acid List</button>
          <p>
            <strong>Phenylalanine (symbol Phe or F)</strong>is an essential α-amino acid with the formula C9H11NO2. 
            It can be viewed as a benzyl group substituted for the methyl group of alanine, or a phenyl group in 
            place of a terminal hydrogen of alanine. This essential amino acid is classified as neutral, and nonpolar 
            because of the inert and hydrophobic nature of the benzyl side chain. The L-isomer is used to biochemically 
            form proteins coded for by DNA. Phenylalanine is a precursor for tyrosine, the monoamine neurotransmitters 
            dopamine, norepinephrine (noradrenaline), and epinephrine (adrenaline), and the skin pigment melanin. 
            It is encoded by the codons UUU and UUC.
          </p>
        </div>
      </Html>
      </Canvas>
      
    );
  }
  
  export default LoadF;
