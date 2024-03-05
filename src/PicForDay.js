const PicForDay = ({pics}) => {
    var now = new Date();
    var day = now.getDay();
    const wrapperStyle = {
        height: "100%",
        position: "relative",
    };
    const picStyle = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
    };
    return (
        <div id='day_picture' style={wrapperStyle}>
            <div style={picStyle}>
                <img width={250} height={250} src={pics[day].url} alt="not found" title={pics[day].title}/>
            </div>
        </div>
    );
};
export default PicForDay;