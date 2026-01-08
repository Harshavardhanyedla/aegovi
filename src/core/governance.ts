import { CalibrationProfile } from './types';

export interface GovernanceConfig {
    shadowMode: boolean;
    killSwitches: {
        rawInputLogging: boolean;
        crossSessionCorrelation: boolean;
        automatedArchival: boolean;
    };
    calibration: CalibrationProfile;
}

export class GovernanceEngine {
    private static config: GovernanceConfig = {
        shadowMode: true, // Default to Shadow Mode for Phase 3
        killSwitches: {
            rawInputLogging: true,
            crossSessionCorrelation: false, // Default off for privacy
            automatedArchival: true
        },
        calibration: 'Conservative'
    };

    static getConfig(): GovernanceConfig {
        return { ...this.config };
    }

    static updateConfig(newConfig: Partial<GovernanceConfig>) {
        this.config = { ...this.config, ...newConfig };
    }

    static resetToEthicsBaseline() {
        this.config = {
            shadowMode: true,
            killSwitches: {
                rawInputLogging: false,
                crossSessionCorrelation: false,
                automatedArchival: false
            },
            calibration: 'Conservative'
        };
    }
}
