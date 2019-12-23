import { Object } from '../utils/types';

const TalkerIdentifiers: Object<string> =  {
    AG: 'AG', AP: 'AP', CD: 'CD', CR: 'CR', CS: 'CS', CT: 'CT', CV: 'CV', CX: 'CX', DE: 'DE', DF: 'DF',
    EC: 'EC', EP: 'EP', ER: 'ER', GL: 'GL', GP: 'GP', GN: 'GN', HC: 'HC', HE: 'HE', HN: 'HN', II: 'II',
    IN: 'IN', LA: 'LA', LC: 'LC', OM: 'OM', P: 'P', RA: 'RA', SD: 'SD', SN: 'SN', TR: 'TR', SS: 'SS',
    TI: 'TI', VD: 'VD', DM: 'DM', VW: 'VW', WI: 'WI', YX: 'YX', ZA: 'ZA', ZC: 'ZC', ZQ: 'ZQ', ZV: 'ZV'
}

enum SentenceIdentifiers {
    AAM= 'AAM', ALM= 'ALM', APA= 'APA', APB= 'APB', ASD= 'ASD', BEC= 'BEC', BOD= 'BOD', BWC= 'BWC',
    BWR= 'BWR', BWW= 'BWW', DBK= 'DBK', DBS= 'DBS', DBT= 'DBT', DCN= 'DCN', DPT= 'DPT', DSC= 'DSC',
    DSE= 'DSE', DSI= 'DSI', DSR= 'DSR', DTM= 'DTM', FSI= 'FSI', GBS= 'GBS', GGA= 'GGA', GLC= 'GLC',
    GLL= 'GLL', GRS= 'GRS', GST= 'GST', GSA= 'GSA', GSV= 'GSV', GTD= 'GTD', GXA= 'GXA', HDG= 'HDG',
    HDM= 'HDM', HDT= 'HDT', HSC= 'HSC', LCD= 'LCD', MSK= 'MSK', MSS= 'MSS', MWD= 'MWD', MTW= 'MTW',
    MWV= 'MWV', OLN= 'OLN', OSD= 'OSD', ROO= 'ROO', RMA= 'RMA', RMB= 'RMB', RMC= 'RMC', ROT= 'ROT',
    RPM= 'RPM', RSA= 'RSA', RSD= 'RSD', RTE= 'RTE', SFI= 'SFI', STN= 'STN', TLL= 'TLL', TRF= 'TRF',
    TTM= 'TTM', TXT= 'TXT', VBW= 'VBW', VDR= 'VDR', VHW= 'VHW', VLW= 'VLW', VPW= 'VPW', VTG= 'VTG',
    VWR= 'VWR', WCV= 'WCV', WDC= 'WDC', WDR= 'WDR', WNC= 'WNC', WPL= 'WPL', XDR= 'XDR', XTE= 'XTE',
    XTR= 'XTR', ZDA= 'ZDA', ZDL= 'ZDL', ZFO= 'ZFO', ZTG= 'ZTG'
};

const SentencesDescriptions: Object<string> = {
    [SentenceIdentifiers.AAM]: 'Waypoint Arrival Alarm',
    [SentenceIdentifiers.ALM]: 'GPS Almanac Data',
    [SentenceIdentifiers.APB]: 'Autopilot Sentence "B"',
    [SentenceIdentifiers.APA]: 'Autopilot Sentence "A"',
    [SentenceIdentifiers.ASD]: 'Autopilot System Data',
    [SentenceIdentifiers.BEC]: 'Bearing & Distance to Waypoint, Dead reckoning',
    [SentenceIdentifiers.BOD]: 'Bearing, Origin to Destination',
    [SentenceIdentifiers.BWC]: 'Bearing & Distance to Waypoint, Great Circle',
    [SentenceIdentifiers.BWR]: 'Bearing & Distance to Waypoint, Rhumb Line',
    [SentenceIdentifiers.BWW]: 'Bearing, Waypoint to Waypoint',
    [SentenceIdentifiers.DBK]: 'Depth Below Keel',
    [SentenceIdentifiers.DBS]: 'Depth Below Surface',
    [SentenceIdentifiers.DBT]: 'Depth Below Transduser',
    [SentenceIdentifiers.DCN]: '[Obsolete] Decca Position',
    [SentenceIdentifiers.DPT]: 'Depth',
    [SentenceIdentifiers.DSC]: 'Digital Selective Calling Information',
    [SentenceIdentifiers.DSE]: 'Extended DSC',
    [SentenceIdentifiers.DSI]: 'DSC Transponder Initiate',
    [SentenceIdentifiers.DSR]: 'DSC Transponder Response',
    [SentenceIdentifiers.DTM]: 'Datum Reference',
    [SentenceIdentifiers.FSI]: 'Frequency Set Information',
    [SentenceIdentifiers.GBS]: 'GBS Satellite Fault Detection',
    [SentenceIdentifiers.GGA]: 'Global Positioning System Fix Data',
    [SentenceIdentifiers.GLC]: 'Geographic Position, Loran-C',
    [SentenceIdentifiers.GLL]: 'Geographic Position, Latitude/Longitude',
    [SentenceIdentifiers.GRS]: 'GPS Range Residuals',
    [SentenceIdentifiers.GSA]: 'GPS DOP and Active Satellites',
    [SentenceIdentifiers.GST]: 'GPS Pseudorange Noise Statistics',
    [SentenceIdentifiers.GSV]: 'GPS Sattelites in View',
    [SentenceIdentifiers.GTD]: 'Geograpic Location in Time Differences',
    [SentenceIdentifiers.GXA]: 'Transit Position',
    [SentenceIdentifiers.HDG]: 'Heading, Deviation & Variation',
    [SentenceIdentifiers.HDM]: 'Heading, Magnetic',
    [SentenceIdentifiers.HDT]: 'Heading, True',
    [SentenceIdentifiers.HSC]: 'Heading Steering Command',
    [SentenceIdentifiers.LCD]: 'Loran-C Signal Data',
    [SentenceIdentifiers.MSK]: 'MSK Receiver Interface (for DGPS Beacon Receivers)',
    [SentenceIdentifiers.MSS]: 'MSK Receiver Signal Status',
    [SentenceIdentifiers.MTW]: 'Water Temperature',
    [SentenceIdentifiers.MWD]: 'Wind Direction & Speed',
    [SentenceIdentifiers.MWV]: 'Wind Speed & Angle',
    [SentenceIdentifiers.OLN]: '[Obsolete] Omega Line Numbers',
    [SentenceIdentifiers.OSD]: 'Own Ship Data',
    [SentenceIdentifiers.RMA]: 'Recommend Minimum Specific Loran-C Data',
    [SentenceIdentifiers.RMB]: 'Recommend Minimum Navigation Information',
    [SentenceIdentifiers.RMC]: 'Recommend Minimum Specific GPS/TRANSIT Data',
    [SentenceIdentifiers.ROO]: 'Waypoints in Active Route',
    [SentenceIdentifiers.ROT]: 'Rate of Turn',
    [SentenceIdentifiers.RPM]: 'Revolutions',
    [SentenceIdentifiers.RSA]: 'Rudder Sensor Angle',
    [SentenceIdentifiers.RSD]: 'RADAR System Data',
    [SentenceIdentifiers.RTE]: 'Routes',
    [SentenceIdentifiers.SFI]: 'Scanning Frequency Information',
    [SentenceIdentifiers.STN]: 'Multiple Data ID',
    [SentenceIdentifiers.TLL]: 'Target Latitude & Longitude',
    [SentenceIdentifiers.TRF]: '[Obsolete] TRANSIT Fix Data',
    [SentenceIdentifiers.TTM]: 'Tracked Target Message',
    [SentenceIdentifiers.VBW]: 'Dual Ground/Water Speed',
    [SentenceIdentifiers.VDR]: 'Set and Drift',
    [SentenceIdentifiers.VHW]: 'Water Speed and Heading',
    [SentenceIdentifiers.VLW]: 'Distance Traveled through Water',
    [SentenceIdentifiers.VPW]: 'Speed, Measured Parallel to Wind',
    [SentenceIdentifiers.VTG]: 'Track Made Good and Ground Speed',
    [SentenceIdentifiers.VWR]: 'Relative Wind Speed & Angle',
    [SentenceIdentifiers.WCV]: 'Waypoint Closure Velocity',
    [SentenceIdentifiers.WDC]: 'Distance to Waypoint, Great Circle',
    [SentenceIdentifiers.WDR]: 'Distance to Waypoint, Rhumb Line',
    [SentenceIdentifiers.WNC]: 'Distance, Waypoint to Waypoint',
    [SentenceIdentifiers.WPL]: 'Waypoint Location',
    [SentenceIdentifiers.XDR]: 'Transducer Measurement',
    [SentenceIdentifiers.XTE]: 'Cross-Track Error, Measured',
    [SentenceIdentifiers.XTR]: 'Cross-Track Error, Dead Reckoning',
    [SentenceIdentifiers.ZDA]: 'Time & Date',
    [SentenceIdentifiers.ZDL]: 'Time & Distance to Variable Point',
    [SentenceIdentifiers.ZFO]: 'UTC & Time from Origin Waypoint',
    [SentenceIdentifiers.ZTG]: 'UTC & Time to Destination Waypoint'
};

const SentencesFormats: Object<string> = {
    [SentenceIdentifiers.AAM]: 'A=Arrival circled entered|V=V,A=Perpendicular passed at way point|V=V,x.x,N=nm|K=km,c--c',
    [SentenceIdentifiers.ALM]: 'x.x,x.x,xx,x.x,hh,hhhh,hh,hhhh,hhhhhh,hhhhhh,hhhhhh,hhhhhh,hhh,hhh',
    [SentenceIdentifiers.APB]: 'V=Loran-C Blink or SNR warning|A=general warning flag,V=Loran-C Cycle Lock warning flag|A=OK or not used,x.x,R=Right|L=Left,N=nm|K=km,A=Arrival circled entered|V=Invalid,A=Perpendicular passed at way point|V=Invalid,x.x,M=Magnetic|T=True,c--c,x.x,M=Magnetic|T=True,x.x,M=Magnetic|T=True',
    [SentenceIdentifiers.APA]: 'V=Loran-C Blink or SNR warning|A=general warning flag,V=Loran-C Cycle Lock warning flag|A=OK or not used,x.xx,R=Right|L=Left,N=nm|K=km,A=Arrival circled entered|V=Invalid,A=Perpendicular passed at way point|V=Invalid,xxx,M=Magnetic|T=True,c---c',
    [SentenceIdentifiers.ASD]: '',
    [SentenceIdentifiers.BEC]: 'hhmmss.ss,llll.ll,N=North|S=South,yyyyy.y,N=North|S=South,x.x,E=East|W=West,x.x,T=True|M=Magnetic,x.x,N=nm|K=km,c--c',
    [SentenceIdentifiers.BOD]: 'x.x,T=True|M=Magnetic,x.x,T=True|M=Magnetic,c--c,c--c',
    [SentenceIdentifiers.BWC]: 'hhmmss.ss,llll.ll,N=North|S=South,yyyyy.yy,E=East|W=West,x.x,T=True|M=Magnetic,x.x,T=True|M=Magnetic,x.x,N=nm|K=km,c--c',
    [SentenceIdentifiers.BWR]: 'hhmmss.ss,llll.ll,N=North|S=South,yyyyy.yy,E=East|W=West,x.x,T=True|M=Magnetic,x.x,T=True|M=Magnetic,x.x,N=nm|K=km,c--c',
    [SentenceIdentifiers.BWW]: 'x.x,T=True|M=Magnetic,x.x,T=True|M=Magnetic,c--c,c--c',
    [SentenceIdentifiers.DBK]: 'x.x,f=ft|M=m,x.x,f=ft|M=m,x.x,F',
    [SentenceIdentifiers.DBS]: 'x.x,f=ft|M=m,x.x,f=ft|M=m,x.x,F',
    [SentenceIdentifiers.DBT]: 'x.x,f=ft|M=m,x.x,f=ft|M=m,x.x,F',
    [SentenceIdentifiers.DCN]: 'xx,cc,x.x,A,cc,x.x,A,cc,x.x,A,A,A,A,x.x,N=nm|K=km,1=Normal pattern|2=Lane identification pattern|3=Lane identification transmissions',
    [SentenceIdentifiers.DPT]: 'x.x,x.x',
    [SentenceIdentifiers.DSC]: '',
    [SentenceIdentifiers.DSE]: '',
    [SentenceIdentifiers.DSI]: '',
    [SentenceIdentifiers.DSR]: '',
    [SentenceIdentifiers.DTM]: 'xxx,x,xx.xxxx,x,xx.xxxx,x,c--c,xxx',
    [SentenceIdentifiers.FSI]: 'xxxxxx,xxxxxx,c,x',
    [SentenceIdentifiers.GBS]: 'hhmmss.ss,x.x,x.x,x.x,x.x,x.x,x.x,x.x',
    [SentenceIdentifiers.GGA]: 'hhmmss.ss,llll.ll,a,yyyyy.yy,a,x,xx,x.x,x.x,M,x.x,M,x.x,xxxx',
    [SentenceIdentifiers.GLC]: 'xxxx,x.x,a,x.x,a,x.x,a,x.x,a,x.x,a,x.x,B=Blink|C=Cycle|S=SNR|A=Valid',
    [SentenceIdentifiers.GLL]: 'llll.ll,N=North|S=South,yyyyy.yy,E=East|W=West,hhmmss.ss,A=Valid|V=Invalid,A=Valid|V=Invalid',
    [SentenceIdentifiers.GRS]: 'hhmmss,x,x.x,x.x,x.x,x.x,x.x,x.x,x.x,x.x,x.x,x.x,x.x,x.x',
    [SentenceIdentifiers.GSA]: 'M=Manual|A=Automatic,x,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,x.x,x.x,x.x',
    [SentenceIdentifiers.GST]: 'hhmmss.ss,x.x,x.x,x.x,x.x,x.x,x.x,x.x',
    [SentenceIdentifiers.GSV]: 'x,x,xx,xx,xx,xxx,xx,xx,xx,xxx,xx,xx,xx,xxx,xx,xx,xx,xxx,xx,',
    [SentenceIdentifiers.GTD]: 'x.x,x.x,x.x,x.x,x.x',
    [SentenceIdentifiers.GXA]: 'hhmmss.ss,llll.ll,a,yyyyy.yy,a,c--c,x',
    [SentenceIdentifiers.HDG]: 'x.x,x.x,a,x.x,a',
    [SentenceIdentifiers.HDM]: 'x.x,M',
    [SentenceIdentifiers.HDT]: 'x.x,T',
    [SentenceIdentifiers.HSC]: 'x.x,T,x.x,M',
    [SentenceIdentifiers.LCD]: 'xxxx,xxx,xxx,xxx,xxx,xxx,xxx,xxx,xxx,xxx,xxx,xxx,xxx',
    [SentenceIdentifiers.MSK]: 'xxx.x,xx,xxx,xx,N',
    [SentenceIdentifiers.MSS]: '',
    [SentenceIdentifiers.MTW]: 'x.x,C=C|K=K|F=F',
    [SentenceIdentifiers.MWD]: 'x.x,T,x.x,M,x.x,N,x.x,M',
    [SentenceIdentifiers.MWV]: 'x.x,a,x.x,a,A',
    [SentenceIdentifiers.OLN]: 'aa,xxx,xxx,aa,xxx,xxx,aa,xxx,xxx',
    [SentenceIdentifiers.OSD]: 'x.x,A,x.x,a,x.x,a,x.x,x.x,a',
    [SentenceIdentifiers.RMA]: 'A,llll.ll,N=North|S=South,yyyyy.yy,E=East|W=West,x.x,x.x,x.x,x.x,x.x,a',
    [SentenceIdentifiers.RMB]: 'A,x.x,a,c--c,c--c,llll.ll,a,yyyyy.yy,a,x.x,x.x,x.x,A,A',
    [SentenceIdentifiers.RMC]: 'hhmmss.ss,A=Valid|V=Invalid,llll.ll,N=North|S=South,yyyyy.yy,E=East|W=West,x.x,x.x,ddmmyy,x.x,a,a',
    [SentenceIdentifiers.ROO]: 'c---c,....',
    [SentenceIdentifiers.ROT]: 'x.x,A',
    [SentenceIdentifiers.RPM]: 'a,x,x.x,x.x,A',
    [SentenceIdentifiers.RSA]: 'x.x,A,x.x,A',
    [SentenceIdentifiers.RSD]: 'x.x,x.x,x.x,x.x,x.x,x.x,x.x,x.x,x.x,x.x,x.x,a,a',
    [SentenceIdentifiers.RTE]: 'x.x,x.x,a,c--c,c--c,...',
    [SentenceIdentifiers.SFI]: 'x.x,x.x,xxxxxx,c,xxxxxx,c',
    [SentenceIdentifiers.STN]: 'xx',
    [SentenceIdentifiers.TLL]: 'xx,llll.lll,a,yyyyy.yyy,a,c--c,hhmmss.ss,a,a',
    [SentenceIdentifiers.TRF]: 'hhmmss.ss,xxxxxx,llll.ll,a,yyyyy.yy,a,x.x,x.x,x.x,x.x,xxx,A',
    [SentenceIdentifiers.TTM]: 'xx,x.x,x.x,T=True|R=Relative,x.x,x.x,T=True|R=Relative,x.x,x.x,K=Km|N=Knots|S=Statue miles,c--c,L=Lost|Q=Query|T=Tracking,a,hhmmss.ss,A=Automatic|M=Manual',
    [SentenceIdentifiers.TXT]: 'x,x,x,c--c',
    [SentenceIdentifiers.VBW]: 'x.x,x.x,A,x.x,x.x,A',
    [SentenceIdentifiers.VDR]: 'x.x,T,x.x,M,x.x,N',
    [SentenceIdentifiers.VHW]: 'x.x,T,x.x,M,x.x,N,x.x,K',
    [SentenceIdentifiers.VLW]: 'x.x,N,x.x,N',
    [SentenceIdentifiers.VPW]: 'x.x,N,x.x,M',
    [SentenceIdentifiers.VTG]: 'x.x,T,x.x,M,x.x,N=nk/h,x.x,K=Km/h,a',
    [SentenceIdentifiers.VWR]: 'x.x,a,x.x,N,x.x,M,x.x,K',
    [SentenceIdentifiers.WCV]: 'x.x,N,c--c',
    [SentenceIdentifiers.WDC]: '',
    [SentenceIdentifiers.WDR]: '',
    [SentenceIdentifiers.WNC]: 'x.x,N,x.x,K,c--c,c--c',
    [SentenceIdentifiers.WPL]: 'llll.ll,a,yyyyy.yy,a,c--c',
    [SentenceIdentifiers.XDR]: 'a,x.x,a,c--c,a,x.x,a,c--c',
    [SentenceIdentifiers.XTE]: 'A,A,x.x,a,N',
    [SentenceIdentifiers.XTR]: 'x.x,a,N',
    [SentenceIdentifiers.ZDA]: 'hhmmss.ss,xx,xx,xxxx,xx,xx',
    [SentenceIdentifiers.ZDL]: 'hhmmss.ss,hhmmss.ss,c--c',
    [SentenceIdentifiers.ZFO]: 'hhmmss.ss,hhmmss.ss,c--c',
    [SentenceIdentifiers.ZTG]: 'hhmmss.ss,hhmmss.ss,c--c',
};

export { TalkerIdentifiers, SentenceIdentifiers, SentencesDescriptions, SentencesFormats}
