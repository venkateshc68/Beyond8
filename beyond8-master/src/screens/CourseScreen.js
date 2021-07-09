import data from "../data";


export default function CouseScreen(props) {
  const course = data.courses.find((x) => x._id === props.match.params.id);
  if (!course) {
    return <div> course Not Found</div>;
  }
  return (
    <div>
     
      <div className="row top">
        <div>
          <li>
            <h1>{course.title}</h1>
          </li>
          <img src={course.image} style={{width:"350px"}} alt={course.name}></img>

          <div>
            <ul>
              <li>
                <h1>{course.name}</h1>
              </li>
              <li style ={{marginLeft:"30px"}}> 
                Description:
                <p> {course.description} </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button style={{color:"white",background:"red"}}>Join Now</button>
    </div>
    
  );
}
