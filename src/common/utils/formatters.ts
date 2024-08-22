import {IState, WebSocketWallet} from "../../types/webSocketTypes";

export const clientStateToProfileState = (state: IState | undefined): WebSocketWallet  => {
  return {
    points: state?.Points || 0,
    pointsHourlyRate: state?.PointsHourlyRate || 0,
    rank: state?.Rank || 0,
    rankThreshold: state?.RankThreshold || 0,
    energyLevel: state?.EnergyLevel || 1,
    tapThreshold: state?.TapThreshold || 1,
    tapLevel: state?.TapLevel || 0,
    energyThreshold: state?.EnergyThreshold || 0,
    availableEnergy: state?.AvailableEnergy || 0,
    refPointsToParent: state?.RefPointsToParent || 0,
    refPointsToParentIfPremium: state?.RefPointsToParentIfPremium || 0,
    refPointsToInvitee: state?.RefPointsToInvitee || 0,
    pointsBonusHourlyRate: state?.PointsBonusHourlyRate || 0,
  }
}
