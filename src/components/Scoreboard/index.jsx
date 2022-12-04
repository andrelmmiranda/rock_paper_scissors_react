import Score from '../Score/index';

const Scoreboard = ({pointsOfPlayer, pointsOfMachine})=>{
 
  const styleFlex = {
    display: 'flex',
    justifyContent: 'center',
  }
  
  return(
    <div>
      <p>Placar</p>
      <div style = {styleFlex}>
        <Score points = {pointsOfPlayer} player = {'player'}/>
        <Score points = {pointsOfMachine} player = {'computer'}/>
      </div>
    </div>
  )
}

export default Scoreboard;