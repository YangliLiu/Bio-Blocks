import  {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls, Html} from "@react-three/drei";

function G(props){
  const {scene} = useGLTF("/G.glb");
  return <primitive object={scene}{...props}/>
}

function LoadG({ onBackClick }) {

    return (
      <Canvas dpr={[1,2]} shadows camera={{fov:45}} style={{"position":"absolute"}}>
        <color attach="background" args={["#7F88D5"]}/>
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI/4]}>
          <Stage environment={"sunset"}>
            <G scale={0.7} />
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
          <p>
            <strong>Glycine (symbol Gly or G)</strong>is an amino acid that has a single hydrogen atom as its side chain. 
            It is the simplest stable amino acid (carbamic acid is unstable), with the chemical formula NH2‐CH2‐COOH. 
            Glycine is one of the proteinogenic amino acids. It is encoded by all the codons starting with GG 
            (GGU, GGC, GGA, GGG). Glycine is integral to the formation of alpha-helices in secondary protein structure 
            due to the "flexibility" caused by such a small R group. Glycine is also an inhibitory 
            neurotransmitter – interference with its release within the spinal cord (such as during a Clostridium tetani infection) can cause spastic paralysis due to 
            uninhibited muscle contraction. It is the only achiral proteinogenic amino acid. It can fit into hydrophilic or hydrophobic environments, 
            due to its minimal side chain of only one hydrogen atom.
          </p>
        </div>
      </Html>
      </Canvas>
      
    );
  }
  
  export default LoadG;
