import RobotActionTypes from './robots.types'

export const filterRobots = robots => ({
    type: RobotActionTypes.FILTER_ROBOTS,
    payload: robots
})