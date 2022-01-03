import PropTypes from 'prop-types'

export const Profile = (props) =>{
    const {fullName,bio,profession,handleName} = props;
    
    
    return(
        <div>
            <p>{fullName}</p>
             <p>{bio}</p>   
            <p> {profession}</p> 
            <div>
                {props.children}
            </div>
            <button onClick = {()=> handleName(fullName)}>Click here</button>
        </div>

 
// Use PropsType to check props.  


    )
}
Profile.defaultProps = { 
    fullName: "yo Gee",
    bio: "chilling",
    profession: "Enjoyment"
}
Profile.propTypes = {
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string

}