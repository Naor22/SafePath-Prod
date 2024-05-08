import YoutubeEmbed from "./YoutubeEmbed";

const Example = () => {
    return (
        <div>
            <div className="divider divider-primary"><h1 className="text-5xl font-mono mb-5 flex justify-center">Example</h1></div>
            <div className='flex justify-center flex-row'>
                <div className='objectDetection flex flex-col mr-3'>
                    <h1 className="text-3xl font-mono mb-2 flex justify-center">Object Detection</h1>
                    <YoutubeEmbed embedId="8S4wSUV-A50" />
                </div>
                <div className='objectDetection flex flex-col'>
                    <h1 className="text-3xl font-mono mb-2 flex justify-center" >Terrain Segmantation</h1>
                    <YoutubeEmbed embedId="D9XALHq5UHU" />
                </div>
            </div>
        </div>
    );
}
export default Example;