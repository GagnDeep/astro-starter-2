# SITEMAP.md: AI Wire Harness

## Architecture Model: Hub and Spoke
- **Hubs**: Broad category pages targeting core capabilities (e.g., EV harness prototyping, IPC/WHMA-A-620 compliance).
- **Spokes**: Highly specific long-tail query targets, linking up to their respective hubs.

### 1. Homepage
- **URL**: `/`
- **Target Query**: Custom wire harness manufacturer
- **Intent**: Find a reliable custom wire harness manufacturer for specialized/demanding applications.
- **Page Type**: Hub
- **Unique Proposition**: Pay-per-lead matching with verified IPC/WHMA-A-620 manufacturers, free for buyers.
- **Inbound Links**: Linked from all spokes via global nav and breadcrumbs.
- **Outbound Links**: `/ev-harness-prototyping/`, `/ipc-whma-a-620-suppliers/`, `/aerospace-wire-harnesses/`, `/medical-device-cabling/`

### 2. Hub: EV Harness Prototyping
- **URL**: `/ev-harness-prototyping/`
- **Target Query**: EV harness prototyping
- **Intent**: Source quick-turn, high-voltage wire harnesses for electric vehicle prototypes.
- **Page Type**: Hub
- **Unique Proposition**: Access to manufacturers specializing in high-voltage and quick-turnarounds for EV R&D.
- **Inbound Links**: `/`, `/high-voltage-ev-cable-assemblies/`, `/battery-management-system-wiring/`
- **Outbound Links**: `/`, `/high-voltage-ev-cable-assemblies/`, `/battery-management-system-wiring/`

### 3. Spoke: High-Voltage EV Cable Assemblies
- **URL**: `/high-voltage-ev-cable-assemblies/`
- **Target Query**: High-voltage EV cable assembly manufacturer
- **Intent**: Find manufacturers capable of handling 400V+ EV cabling safely and compliantly.
- **Page Type**: Spoke
- **Unique Proposition**: Specific filtering for ISO 26262 and high-voltage testing capabilities.
- **Inbound Links**: `/ev-harness-prototyping/`
- **Outbound Links**: `/ev-harness-prototyping/`

### 4. Spoke: BMS Wiring Harnesses
- **URL**: `/battery-management-system-wiring/`
- **Target Query**: BMS wiring harness manufacturer
- **Intent**: Source precision, low-voltage wiring for battery management systems.
- **Page Type**: Spoke
- **Unique Proposition**: Manufacturers experienced with fine-pitch connectors and signal integrity.
- **Inbound Links**: `/ev-harness-prototyping/`
- **Outbound Links**: `/ev-harness-prototyping/`

### 5. Hub: IPC/WHMA-A-620 Suppliers
- **URL**: `/ipc-whma-a-620-suppliers/`
- **Target Query**: IPC/WHMA-A-620 supplier
- **Intent**: Find certified suppliers guaranteeing the highest standard of cable assembly and wire harness acceptability.
- **Page Type**: Hub
- **Unique Proposition**: All matched manufacturers must prove active Class 3 IPC/WHMA-A-620 certification.
- **Inbound Links**: `/`, `/class-3-military-wire-harnesses/`, `/ipc-certified-cable-assemblies/`
- **Outbound Links**: `/`, `/class-3-military-wire-harnesses/`, `/ipc-certified-cable-assemblies/`

### 6. Spoke: Class 3 Military Wire Harnesses
- **URL**: `/class-3-military-wire-harnesses/`
- **Target Query**: Class 3 military wire harness manufacturer
- **Intent**: Source mil-spec harnesses requiring absolute reliability in extreme environments.
- **Page Type**: Spoke
- **Unique Proposition**: Network of ITAR-registered and IPC Class 3 certified builders.
- **Inbound Links**: `/ipc-whma-a-620-suppliers/`
- **Outbound Links**: `/ipc-whma-a-620-suppliers/`

### 7. Spoke: IPC Certified Cable Assemblies
- **URL**: `/ipc-certified-cable-assemblies/`
- **Target Query**: IPC certified cable assembly
- **Intent**: Broad search for general industrial cable assemblies with certified quality control.
- **Page Type**: Spoke
- **Unique Proposition**: Direct matching based on specific IPC certification classes (1, 2, or 3).
- **Inbound Links**: `/ipc-whma-a-620-suppliers/`
- **Outbound Links**: `/ipc-whma-a-620-suppliers/`

### 8. Hub: Aerospace Wire Harnesses
- **URL**: `/aerospace-wire-harnesses/`
- **Target Query**: Aerospace wire harness manufacturer
- **Intent**: Find AS9100 certified wire harness manufacturers for aviation and space applications.
- **Page Type**: Hub
- **Unique Proposition**: Verified AS9100D compliance and cleanroom manufacturing matching.
- **Inbound Links**: `/`, `/space-grade-cable-assemblies/`, `/commercial-aviation-wiring/`
- **Outbound Links**: `/`, `/space-grade-cable-assemblies/`, `/commercial-aviation-wiring/`

### 9. Spoke: Space-Grade Cable Assemblies
- **URL**: `/space-grade-cable-assemblies/`
- **Target Query**: Space grade cable assembly manufacturer
- **Intent**: Source ultra-reliable, low-outgassing cables for orbital applications.
- **Page Type**: Spoke
- **Unique Proposition**: Builders vetted for NASA STD 8739.4 compliance.
- **Inbound Links**: `/aerospace-wire-harnesses/`
- **Outbound Links**: `/aerospace-wire-harnesses/`

### 10. Spoke: Commercial Aviation Wiring
- **URL**: `/commercial-aviation-wiring/`
- **Target Query**: Commercial aircraft wiring harness
- **Intent**: Source lightweight, flame-retardant wiring for commercial aircraft interiors and avionics.
- **Page Type**: Spoke
- **Unique Proposition**: Focus on weight reduction and FAR 25.853 flammability compliance.
- **Inbound Links**: `/aerospace-wire-harnesses/`
- **Outbound Links**: `/aerospace-wire-harnesses/`

### 11. Hub: Medical Device Cabling
- **URL**: `/medical-device-cabling/`
- **Target Query**: Medical device cable manufacturer
- **Intent**: Find ISO 13485 certified manufacturers for medical equipment cabling.
- **Page Type**: Hub
- **Unique Proposition**: Bio-compatible materials and ISO 13485 certified facility matching.
- **Inbound Links**: `/`, `/autoclavable-cable-assemblies/`, `/patient-monitoring-cables/`
- **Outbound Links**: `/`, `/autoclavable-cable-assemblies/`, `/patient-monitoring-cables/`

### 12. Spoke: Autoclavable Cable Assemblies
- **URL**: `/autoclavable-cable-assemblies/`
- **Target Query**: Autoclavable cable assembly
- **Intent**: Source cables capable of surviving repeated high-temperature sterilization cycles.
- **Page Type**: Spoke
- **Unique Proposition**: Silicone overmolding and specialized material expertise.
- **Inbound Links**: `/medical-device-cabling/`
- **Outbound Links**: `/medical-device-cabling/`

### 13. Spoke: Patient Monitoring Cables
- **URL**: `/patient-monitoring-cables/`
- **Target Query**: Patient monitoring cable manufacturer
- **Intent**: High-flex, low-noise cables for ECG, SpO2, and other non-invasive monitors.
- **Page Type**: Spoke
- **Unique Proposition**: Expertise in low-triboelectric noise cables for sensitive analog signals.
- **Inbound Links**: `/medical-device-cabling/`
- **Outbound Links**: `/medical-device-cabling/`

### 14. Hub: Industrial Automation Wiring
- **URL**: `/industrial-automation-wiring/`
- **Target Query**: Industrial automation wire harness
- **Intent**: Source ruggedized wiring for robotics, factory automation, and heavy machinery.
- **Page Type**: Hub
- **Unique Proposition**: Focus on high-flex cycles, oil resistance, and M12/M8 connector expertise.
- **Inbound Links**: `/`, `/robotic-flex-cables/`, `/sensor-actuator-cabling/`
- **Outbound Links**: `/`, `/robotic-flex-cables/`, `/sensor-actuator-cabling/`

### 15. Spoke: Robotic Flex Cables
- **URL**: `/robotic-flex-cables/`
- **Target Query**: Continuous flex robotic cable assembly
- **Intent**: Find manufacturers that can guarantee millions of flex cycles for robotic arms.
- **Page Type**: Spoke
- **Unique Proposition**: Matching based on dynamic drag chain testing capabilities.
- **Inbound Links**: `/industrial-automation-wiring/`
- **Outbound Links**: `/industrial-automation-wiring/`

### 16. Spoke: Sensor & Actuator Cabling
- **URL**: `/sensor-actuator-cabling/`
- **Target Query**: Industrial sensor cable manufacturer
- **Intent**: Source standardized (e.g., M12, M8) cabling with custom lengths and shielding for factory floors.
- **Page Type**: Spoke
- **Unique Proposition**: Rapid sourcing for high-mix, low-volume industrial M-series cables.
- **Inbound Links**: `/industrial-automation-wiring/`
- **Outbound Links**: `/industrial-automation-wiring/`
