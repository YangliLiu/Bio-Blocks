import  {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls, Html} from "@react-three/drei";

function R(props){
  const {scene} = useGLTF("/R.glb");
  return <primitive object={scene}{...props}/>
}

function LoadR({ onBackClick }) {

    return (
      <Canvas dpr={[1,2]} shadows camera={{fov:45}} style={{"position":"absolute"}}>
        <color attach="background" args={["#4792CC"]}/>
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI/4]}>
          <Stage environment={"sunset"}>
            <R scale={0.5} />
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
          <p>
            <strong>Arginine (symbol Arg or R)</strong>, is the amino acid with the formula (H2N)(HN)CN(H)(CH2)3CH(NH2)CO2H. 
            The molecule features a guanidino group appended to a standard amino acid framework. At physiological pH, the carboxylic acid is deprotonated (−CO2−) and 
            both the amino and guanidino groups are protonated, resulting in a cation. Only the l-arginine enantiomer is found naturally. 
            Arg residues are common components of proteins. It is encoded by the codons CGU, CGC, CGA, CGG, AGA, and AGG. The guanidine group in arginine 
            is the precursor for the biosynthesis of nitric oxide. Like all amino acids, it is a white, water-soluble solid.
          </p>
        </div>
      </Html>
      </Canvas>
      
    );
  }
  
  export default LoadR;
