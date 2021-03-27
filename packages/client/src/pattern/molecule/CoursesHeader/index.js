import {
  container,
  containerLogo,
  containerLogoImage,
  containerSessionLinks,
  containerSessionLinksMenu,
  containerSessionLinksMenuItem,
  containerSessionLinksMenuItemText,
  containerSessionLinksMenuSelect,
  containerSessionLinksMenuSelectButton,
  containerSessionLinksMenuSelectButtonImage,
} from './CoursesHeader.scss'
import { coursesHeaderDefaultProps, coursesHeaderPropTypes } from './CoursesHeader.prop'

export function CoursesHeader({ className }) {
  return (
    <div className={className} /* style={{ marginTop: '55px', display: 'flex', justifyContent: 'center' }} */>
      <div className={container}>
        <div className={containerLogo}>
          <div className={containerLogoImage}>
            {/*
            <svg width="112px" height="55px" viewBox="0 0 112 55">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Artboard-1" fill="#000000">
                  <path d="M5.368,12.592 L5.368,8.872 L3.328,8.872 L3.328,12.592 L1.216,12.592 L1.216,14.392 L3.328,14.392 L3.328,22.288 C3.328,22.8640029 3.38399944,23.3279982 3.496,23.68 C3.60800056,24.0320018 3.77999884,24.303999 4.012,24.496 C4.24400116,24.688001 4.54799812,24.8199996 4.924,24.892 C5.30000188,24.9640004 5.75199736,25 6.28,25 L7.84,25 L7.84,23.2 L6.904,23.2 C6.5839984,23.2 6.324001,23.1880001 6.124,23.164 C5.923999,23.1399999 5.76800056,23.0880004 5.656,23.008 C5.54399944,22.9279996 5.4680002,22.8160007 5.428,22.672 C5.3879998,22.5279993 5.368,22.3360012 5.368,22.096 L5.368,14.392 L7.84,14.392 L7.84,12.592 L5.368,12.592 Z M10.096,7.864 L10.096,25 L12.136,25 L12.136,17.992 C12.136,17.4319972 12.2119992,16.9160024 12.364,16.444 C12.5160008,15.9719976 12.7439985,15.5600018 13.048,15.208 C13.3520015,14.8559982 13.7319977,14.584001 14.188,14.392 C14.6440023,14.199999 15.1839969,14.104 15.808,14.104 C16.5920039,14.104 17.2079978,14.3279978 17.656,14.776 C18.1040022,15.2240022 18.328,15.8319962 18.328,16.6 L18.328,25 L20.368,25 L20.368,16.84 C20.368,16.1679966 20.3000007,15.5560028 20.164,15.004 C20.0279993,14.4519972 19.7920017,13.976002 19.456,13.576 C19.1199983,13.175998 18.6800027,12.8640011 18.136,12.64 C17.5919973,12.4159989 16.9120041,12.304 16.096,12.304 C15.7279982,12.304 15.348002,12.3439996 14.956,12.424 C14.563998,12.5040004 14.1880018,12.6279992 13.828,12.796 C13.4679982,12.9640008 13.1440014,13.1799987 12.856,13.444 C12.5679986,13.7080013 12.3440008,14.0319981 12.184,14.416 L12.136,14.416 L12.136,7.864 L10.096,7.864 Z M32.056,17.608 L24.928,17.608 C24.9600002,17.1279976 25.0639991,16.6760021 25.24,16.252 C25.4160009,15.8279979 25.6559985,15.4560016 25.96,15.136 C26.2640015,14.8159984 26.6279979,14.5640009 27.052,14.38 C27.4760021,14.1959991 27.9519974,14.104 28.48,14.104 C28.9920026,14.104 29.4599979,14.1959991 29.884,14.38 C30.3080021,14.5640009 30.6759984,14.8119984 30.988,15.124 C31.3000016,15.4360016 31.5479991,15.8079978 31.732,16.24 C31.9160009,16.6720022 32.0239998,17.1279976 32.056,17.608 L32.056,17.608 Z M34.024,21.064 L32.008,21.064 C31.8319991,21.8800041 31.4680028,22.487998 30.916,22.888 C30.3639972,23.288002 29.6560043,23.488 28.792,23.488 C28.1199966,23.488 27.5360025,23.3760011 27.04,23.152 C26.5439975,22.9279989 26.1360016,22.6280019 25.816,22.252 C25.4959984,21.8759981 25.2640007,21.4440024 25.12,20.956 C24.9759993,20.4679976 24.9119999,19.9520027 24.928,19.408 L34.216,19.408 C34.2480002,18.6559962 34.1800008,17.8640042 34.012,17.032 C33.8439992,16.1999958 33.5400022,15.4320035 33.1,14.728 C32.6599978,14.0239965 32.0760036,13.4440023 31.348,12.988 C30.6199964,12.5319977 29.7040055,12.304 28.6,12.304 C27.7519958,12.304 26.9720036,12.4639984 26.26,12.784 C25.5479964,13.1040016 24.9320026,13.5519971 24.412,14.128 C23.8919974,14.7040029 23.4880014,15.3839961 23.2,16.168 C22.9119986,16.9520039 22.768,17.8159953 22.768,18.76 C22.8000002,19.7040047 22.9399988,20.575996 23.188,21.376 C23.4360012,22.176004 23.8079975,22.8639971 24.304,23.44 C24.8000025,24.0160029 25.4119964,24.4639984 26.14,24.784 C26.8680036,25.1040016 27.727995,25.264 28.72,25.264 C30.128007,25.264 31.2959954,24.9120035 32.224,24.208 C33.1520046,23.5039965 33.7519986,22.456007 34.024,21.064 L34.024,21.064 Z M43.336,7.864 L43.336,25 L45.616,25 L45.616,17.68 L51.184,17.68 C51.7440028,17.68 52.1919983,17.7639992 52.528,17.932 C52.8640017,18.1000008 53.135999,18.3239986 53.344,18.604 C53.552001,18.8840014 53.7039995,19.2119981 53.8,19.588 C53.8960005,19.9640019 53.9759997,20.3599979 54.04,20.776 C54.1200004,21.1920021 54.1679999,21.6159978 54.184,22.048 C54.2000001,22.4800022 54.2159999,22.8839981 54.232,23.26 C54.2480001,23.6360019 54.2839997,23.9759985 54.34,24.28 C54.3960003,24.5840015 54.5039992,24.8239991 54.664,25 L57.208,25 C56.9679988,24.7119986 56.7880006,24.3800019 56.668,24.004 C56.5479994,23.6279981 56.4560003,23.2320021 56.392,22.816 C56.3279997,22.3999979 56.2880001,21.9760022 56.272,21.544 C56.2559999,21.1119978 56.2320002,20.6880021 56.2,20.272 C56.1519998,19.8559979 56.0840004,19.4560019 55.996,19.072 C55.9079996,18.6879981 55.7720009,18.3400016 55.588,18.028 C55.4039991,17.7159984 55.1560016,17.4480011 54.844,17.224 C54.5319984,16.9999989 54.1280025,16.8400005 53.632,16.744 L53.632,16.696 C54.6720052,16.4079986 55.4279976,15.8720039 55.9,15.088 C56.3720024,14.3039961 56.608,13.3920052 56.608,12.352 C56.608,10.959993 56.1480046,9.864004 55.228,9.064 C54.3079954,8.263996 53.0320082,7.864 51.4,7.864 L43.336,7.864 Z M50.368,15.76 L45.616,15.76 L45.616,9.784 L51.28,9.784 C52.3520054,9.784 53.1279976,10.0559973 53.608,10.6 C54.0880024,11.1440027 54.328,11.8479957 54.328,12.712 C54.328,13.3360031 54.2200011,13.843998 54.004,14.236 C53.7879989,14.628002 53.5000018,14.9399988 53.14,15.172 C52.7799982,15.4040012 52.3600024,15.5599996 51.88,15.64 C51.3999976,15.7200004 50.8960026,15.76 50.368,15.76 L50.368,15.76 Z M60.928,18.808 C60.928,18.0559962 61.027999,17.3880029 61.228,16.804 C61.428001,16.2199971 61.7039982,15.728002 62.056,15.328 C62.4080018,14.927998 62.8199976,14.624001 63.292,14.416 C63.7640024,14.207999 64.2639974,14.104 64.792,14.104 C65.3200026,14.104 65.8199976,14.207999 66.292,14.416 C66.7640024,14.624001 67.1759982,14.927998 67.528,15.328 C67.8800018,15.728002 68.155999,16.2199971 68.356,16.804 C68.556001,17.3880029 68.656,18.0559962 68.656,18.808 C68.656,19.5600038 68.556001,20.2279971 68.356,20.812 C68.155999,21.3960029 67.8800018,21.883998 67.528,22.276 C67.1759982,22.668002 66.7640024,22.967999 66.292,23.176 C65.8199976,23.384001 65.3200026,23.488 64.792,23.488 C64.2639974,23.488 63.7640024,23.384001 63.292,23.176 C62.8199976,22.967999 62.4080018,22.668002 62.056,22.276 C61.7039982,21.883998 61.428001,21.3960029 61.228,20.812 C61.027999,20.2279971 60.928,19.5600038 60.928,18.808 L60.928,18.808 Z M58.768,18.808 C58.768,19.7200046 58.8959987,20.5679961 59.152,21.352 C59.4080013,22.1360039 59.7919974,22.8199971 60.304,23.404 C60.8160026,23.9880029 61.4479962,24.4439984 62.2,24.772 C62.9520038,25.1000016 63.8159951,25.264 64.792,25.264 C65.784005,25.264 66.6519963,25.1000016 67.396,24.772 C68.1400037,24.4439984 68.7679974,23.9880029 69.28,23.404 C69.7920026,22.8199971 70.1759987,22.1360039 70.432,21.352 C70.6880013,20.5679961 70.816,19.7200046 70.816,18.808 C70.816,17.8959954 70.6880013,17.044004 70.432,16.252 C70.1759987,15.459996 69.7920026,14.7720029 69.28,14.188 C68.7679974,13.6039971 68.1400037,13.1440017 67.396,12.808 C66.6519963,12.4719983 65.784005,12.304 64.792,12.304 C63.8159951,12.304 62.9520038,12.4719983 62.2,12.808 C61.4479962,13.1440017 60.8160026,13.6039971 60.304,14.188 C59.7919974,14.7720029 59.4080013,15.459996 59.152,16.252 C58.8959987,17.044004 58.768,17.8959954 58.768,18.808 L58.768,18.808 Z M84.208,24.952 C83.8559982,25.160001 83.3680031,25.264 82.744,25.264 C82.2159974,25.264 81.7960016,25.1160015 81.484,24.82 C81.1719984,24.5239985 81.016,24.0400034 81.016,23.368 C80.4559972,24.0400034 79.8040037,24.5239985 79.06,24.82 C78.3159963,25.1160015 77.5120043,25.264 76.648,25.264 C76.0879972,25.264 75.5560025,25.2000006 75.052,25.072 C74.5479975,24.9439994 74.1120018,24.7440014 73.744,24.472 C73.3759982,24.1999986 73.0840011,23.8440022 72.868,23.404 C72.6519989,22.9639978 72.544,22.4320031 72.544,21.808 C72.544,21.1039965 72.6639988,20.5280022 72.904,20.08 C73.1440012,19.6319978 73.459998,19.2680014 73.852,18.988 C74.244002,18.7079986 74.6919975,18.4960007 75.196,18.352 C75.7000025,18.2079993 76.2159974,18.0880005 76.744,17.992 C77.3040028,17.8799994 77.8359975,17.7960003 78.34,17.74 C78.8440025,17.6839997 79.2879981,17.6040005 79.672,17.5 C80.0560019,17.3959995 80.3599989,17.244001 80.584,17.044 C80.8080011,16.843999 80.92,16.5520019 80.92,16.168 C80.92,15.7199978 80.8360008,15.3600014 80.668,15.088 C80.4999992,14.8159986 80.2840013,14.6080007 80.02,14.464 C79.7559987,14.3199993 79.4600016,14.2240002 79.132,14.176 C78.8039984,14.1279998 78.4800016,14.104 78.16,14.104 C77.2959957,14.104 76.5760029,14.2679984 76,14.596 C75.4239971,14.9240016 75.1120002,15.5439954 75.064,16.456 L73.024,16.456 C73.0560002,15.6879962 73.2159986,15.0400026 73.504,14.512 C73.7920014,13.9839974 74.1759976,13.5560016 74.656,13.228 C75.1360024,12.8999984 75.6839969,12.6640007 76.3,12.52 C76.9160031,12.3759993 77.5759965,12.304 78.28,12.304 C78.8400028,12.304 79.3959972,12.3439996 79.948,12.424 C80.5000028,12.5040004 80.9999978,12.6679988 81.448,12.916 C81.8960022,13.1640012 82.2559986,13.5119978 82.528,13.96 C82.8000014,14.4080022 82.936,14.9919964 82.936,15.712 L82.936,22.096 C82.936,22.5760024 82.9639997,22.9279989 83.02,23.152 C83.0760003,23.3760011 83.2639984,23.488 83.584,23.488 C83.7600009,23.488 83.9679988,23.4480004 84.208,23.368 L84.208,24.952 Z M80.896,18.592 C80.6399987,18.784001 80.3040021,18.9239996 79.888,19.012 C79.4719979,19.1000004 79.0360023,19.1719997 78.58,19.228 C78.1239977,19.2840003 77.6640023,19.3479996 77.2,19.42 C76.7359977,19.4920004 76.3200018,19.6079992 75.952,19.768 C75.5839982,19.9280008 75.2840012,20.1559985 75.052,20.452 C74.8199988,20.7480015 74.704,21.1519974 74.704,21.664 C74.704,22.0000017 74.7719993,22.2839988 74.908,22.516 C75.0440007,22.7480012 75.2199989,22.9359993 75.436,23.08 C75.6520011,23.2240007 75.9039986,23.3279997 76.192,23.392 C76.4800014,23.4560003 76.7839984,23.488 77.104,23.488 C77.7760034,23.488 78.3519976,23.3960009 78.832,23.212 C79.3120024,23.0279991 79.7039985,22.7960014 80.008,22.516 C80.3120015,22.2359986 80.5359993,21.9320016 80.68,21.604 C80.8240007,21.2759984 80.896,20.9680014 80.896,20.68 L80.896,18.592 Z M87.592,18.904 C87.592,18.295997 87.6559994,17.7040029 87.784,17.128 C87.9120006,16.5519971 88.1199986,16.0400022 88.408,15.592 C88.6960014,15.1439978 89.0799976,14.7840014 89.56,14.512 C90.0400024,14.2399986 90.6239966,14.104 91.312,14.104 C92.0160035,14.104 92.6159975,14.2359987 93.112,14.5 C93.6080025,14.7640013 94.0119984,15.1119978 94.324,15.544 C94.6360016,15.9760022 94.8639993,16.4759972 95.008,17.044 C95.1520007,17.6120028 95.224,18.199997 95.224,18.808 C95.224,19.3840029 95.1560007,19.9519972 95.02,20.512 C94.8839993,21.0720028 94.6640015,21.5719978 94.36,22.012 C94.0559985,22.4520022 93.6640024,22.8079986 93.184,23.08 C92.7039976,23.3520014 92.1200034,23.488 91.432,23.488 C90.7759967,23.488 90.2040024,23.3600013 89.716,23.104 C89.2279976,22.8479987 88.8280016,22.5040022 88.516,22.072 C88.2039984,21.6399978 87.9720008,21.1480028 87.82,20.596 C87.6679992,20.0439972 87.592,19.4800029 87.592,18.904 L87.592,18.904 Z M97.192,25 L97.192,7.864 L95.152,7.864 L95.152,14.248 L95.104,14.248 C94.8799989,13.8799982 94.6040016,13.5720012 94.276,13.324 C93.9479984,13.0759988 93.6000018,12.8760008 93.232,12.724 C92.8639982,12.5719992 92.4960018,12.4640003 92.128,12.4 C91.7599982,12.3359997 91.4160016,12.304 91.096,12.304 C90.1519953,12.304 89.3240036,12.4759983 88.612,12.82 C87.8999964,13.1640017 87.3080024,13.6279971 86.836,14.212 C86.3639976,14.7960029 86.0120012,15.4799961 85.78,16.264 C85.5479988,17.0480039 85.432,17.8799956 85.432,18.76 C85.432,19.6400044 85.5519988,20.4719961 85.792,21.256 C86.0320012,22.0400039 86.3879976,22.727997 86.86,23.32 C87.3320024,23.912003 87.9239964,24.3839982 88.636,24.736 C89.3480036,25.0880018 90.1839952,25.264 91.144,25.264 C92.0080043,25.264 92.7999964,25.1120015 93.52,24.808 C94.2400036,24.5039985 94.7679983,24.0080034 95.104,23.32 L95.152,23.32 L95.152,25 L97.192,25 Z M17.712,33.2639971 L17.712,29.5439971 L15.672,29.5439971 L15.672,33.2639971 L13.56,33.2639971 L13.56,35.0639971 L15.672,35.0639971 L15.672,42.9599971 C15.672,43.536 15.7279994,43.9999953 15.84,44.3519971 C15.9520006,44.7039988 16.1239988,44.9759961 16.356,45.1679971 C16.5880012,45.359998 16.8919981,45.4919967 17.268,45.5639971 C17.6440019,45.6359974 18.0959974,45.6719971 18.624,45.6719971 L20.184,45.6719971 L20.184,43.8719971 L19.248,43.8719971 C18.9279984,43.8719971 18.668001,43.8599972 18.468,43.8359971 C18.267999,43.811997 18.1120006,43.7599975 18,43.6799971 C17.8879994,43.5999967 17.8120002,43.4879978 17.772,43.3439971 C17.7319998,43.1999964 17.712,43.0079983 17.712,42.7679971 L17.712,35.0639971 L20.184,35.0639971 L20.184,33.2639971 L17.712,33.2639971 Z M23.928,39.4799971 C23.928,38.7279933 24.027999,38.06 24.228,37.4759971 C24.428001,36.8919942 24.7039982,36.3999991 25.056,35.9999971 C25.4080018,35.5999951 25.8199976,35.2959981 26.292,35.0879971 C26.7640024,34.879996 27.2639974,34.7759971 27.792,34.7759971 C28.3200026,34.7759971 28.8199976,34.879996 29.292,35.0879971 C29.7640024,35.2959981 30.1759982,35.5999951 30.528,35.9999971 C30.8800018,36.3999991 31.155999,36.8919942 31.356,37.4759971 C31.556001,38.06 31.656,38.7279933 31.656,39.4799971 C31.656,40.2320008 31.556001,40.8999942 31.356,41.4839971 C31.155999,42.068 30.8800018,42.5559951 30.528,42.9479971 C30.1759982,43.339999 29.7640024,43.639996 29.292,43.8479971 C28.8199976,44.0559981 28.3200026,44.1599971 27.792,44.1599971 C27.2639974,44.1599971 26.7640024,44.0559981 26.292,43.8479971 C25.8199976,43.639996 25.4080018,43.339999 25.056,42.9479971 C24.7039982,42.5559951 24.428001,42.068 24.228,41.4839971 C24.027999,40.8999942 23.928,40.2320008 23.928,39.4799971 L23.928,39.4799971 Z M21.768,39.4799971 C21.768,40.3920016 21.8959987,41.2399932 22.152,42.0239971 C22.4080013,42.808001 22.7919974,43.4919942 23.304,44.0759971 C23.8160026,44.66 24.4479962,45.1159954 25.2,45.4439971 C25.9520038,45.7719987 26.8159951,45.9359971 27.792,45.9359971 C28.784005,45.9359971 29.6519963,45.7719987 30.396,45.4439971 C31.1400037,45.1159954 31.7679974,44.66 32.28,44.0759971 C32.7920026,43.4919942 33.1759987,42.808001 33.432,42.0239971 C33.6880013,41.2399932 33.816,40.3920016 33.816,39.4799971 C33.816,38.5679925 33.6880013,37.716001 33.432,36.9239971 C33.1759987,36.1319931 32.7920026,35.444 32.28,34.8599971 C31.7679974,34.2759942 31.1400037,33.8159988 30.396,33.4799971 C29.6519963,33.1439954 28.784005,32.9759971 27.792,32.9759971 C26.8159951,32.9759971 25.9520038,33.1439954 25.2,33.4799971 C24.4479962,33.8159988 23.8160026,34.2759942 23.304,34.8599971 C22.7919974,35.444 22.4080013,36.1319931 22.152,36.9239971 C21.8959987,37.716001 21.768,38.5679925 21.768,39.4799971 L21.768,39.4799971 Z M43.224,28.5359971 L43.224,45.6719971 L45.504,45.6719971 L45.504,38.3519971 L51.072,38.3519971 C51.6320028,38.3519971 52.0799983,38.4359962 52.416,38.6039971 C52.7520017,38.7719979 53.023999,38.9959957 53.232,39.2759971 C53.440001,39.5559985 53.5919995,39.8839952 53.688,40.2599971 C53.7840005,40.635999 53.8639997,41.031995 53.928,41.4479971 C54.0080004,41.8639992 54.0559999,42.2879949 54.072,42.7199971 C54.0880001,43.1519992 54.1039999,43.5559952 54.12,43.9319971 C54.1360001,44.307999 54.1719997,44.6479956 54.228,44.9519971 C54.2840003,45.2559986 54.3919992,45.4959962 54.552,45.6719971 L57.096,45.6719971 C56.8559988,45.3839956 56.6760006,45.051999 56.556,44.6759971 C56.4359994,44.2999952 56.3440003,43.9039992 56.28,43.4879971 C56.2159997,43.071995 56.1760001,42.6479992 56.16,42.2159971 C56.1439999,41.7839949 56.1200002,41.3599992 56.088,40.9439971 C56.0399998,40.527995 55.9720004,40.127999 55.884,39.7439971 C55.7959996,39.3599952 55.6600009,39.0119986 55.476,38.6999971 C55.2919991,38.3879955 55.0440016,38.1199982 54.732,37.8959971 C54.4199984,37.671996 54.0160025,37.5119976 53.52,37.4159971 L53.52,37.3679971 C54.5600052,37.0799956 55.3159976,36.544001 55.788,35.7599971 C56.2600024,34.9759932 56.496,34.0640023 56.496,33.0239971 C56.496,31.6319901 56.0360046,30.5360011 55.116,29.7359971 C54.1959954,28.9359931 52.9200082,28.5359971 51.288,28.5359971 L43.224,28.5359971 Z M50.256,36.4319971 L45.504,36.4319971 L45.504,30.4559971 L51.168,30.4559971 C52.2400054,30.4559971 53.0159976,30.7279944 53.496,31.2719971 C53.9760024,31.8159998 54.216,32.5199928 54.216,33.3839971 C54.216,34.0080002 54.1080011,34.5159951 53.892,34.9079971 C53.6759989,35.299999 53.3880018,35.6119959 53.028,35.8439971 C52.6679982,36.0759982 52.2480024,36.2319967 51.768,36.3119971 C51.2879976,36.3919975 50.7840026,36.4319971 50.256,36.4319971 L50.256,36.4319971 Z M67.944,38.2799971 L60.816,38.2799971 C60.8480002,37.7999947 60.9519991,37.3479992 61.128,36.9239971 C61.3040009,36.499995 61.5439985,36.1279987 61.848,35.8079971 C62.1520015,35.4879955 62.5159979,35.235998 62.94,35.0519971 C63.3640021,34.8679962 63.8399974,34.7759971 64.368,34.7759971 C64.8800026,34.7759971 65.3479979,34.8679962 65.772,35.0519971 C66.1960021,35.235998 66.5639984,35.4839955 66.876,35.7959971 C67.1880016,36.1079986 67.4359991,36.4799949 67.62,36.9119971 C67.8040009,37.3439992 67.9119998,37.7999947 67.944,38.2799971 L67.944,38.2799971 Z M69.912,41.7359971 L67.896,41.7359971 C67.7199991,42.5520012 67.3560028,43.1599951 66.804,43.5599971 C66.2519972,43.9599991 65.5440043,44.1599971 64.68,44.1599971 C64.0079966,44.1599971 63.4240025,44.0479982 62.928,43.8239971 C62.4319975,43.599996 62.0240016,43.299999 61.704,42.9239971 C61.3839984,42.5479952 61.1520007,42.1159995 61.008,41.6279971 C60.8639993,41.1399946 60.7999999,40.6239998 60.816,40.0799971 L70.104,40.0799971 C70.1360002,39.3279933 70.0680008,38.5360012 69.9,37.7039971 C69.7319992,36.8719929 69.4280022,36.1040006 68.988,35.3999971 C68.5479978,34.6959936 67.9640036,34.1159994 67.236,33.6599971 C66.5079964,33.2039948 65.5920055,32.9759971 64.488,32.9759971 C63.6399958,32.9759971 62.8600036,33.1359955 62.148,33.4559971 C61.4359964,33.7759987 60.8200026,34.2239942 60.3,34.7999971 C59.7799974,35.376 59.3760014,36.0559932 59.088,36.8399971 C58.7999986,37.624001 58.656,38.4879924 58.656,39.4319971 C58.6880002,40.3760018 58.8279988,41.2479931 59.076,42.0479971 C59.3240012,42.8480011 59.6959975,43.5359942 60.192,44.1119971 C60.6880025,44.688 61.2999964,45.1359955 62.028,45.4559971 C62.7560036,45.7759987 63.615995,45.9359971 64.608,45.9359971 C66.016007,45.9359971 67.1839954,45.5840006 68.112,44.8799971 C69.0400046,44.1759936 69.6399986,43.128004 69.912,41.7359971 L69.912,41.7359971 Z M83.208,45.6239971 C82.8559982,45.8319981 82.3680031,45.9359971 81.744,45.9359971 C81.2159974,45.9359971 80.7960016,45.7879986 80.484,45.4919971 C80.1719984,45.1959956 80.016,44.7120004 80.016,44.0399971 C79.4559972,44.7120004 78.8040037,45.1959956 78.06,45.4919971 C77.3159963,45.7879986 76.5120043,45.9359971 75.648,45.9359971 C75.0879972,45.9359971 74.5560025,45.8719977 74.052,45.7439971 C73.5479975,45.6159964 73.1120018,45.4159984 72.744,45.1439971 C72.3759982,44.8719957 72.0840011,44.5159993 71.868,44.0759971 C71.6519989,43.6359949 71.544,43.1040002 71.544,42.4799971 C71.544,41.7759936 71.6639988,41.1999993 71.904,40.7519971 C72.1440012,40.3039948 72.459998,39.9399985 72.852,39.6599971 C73.244002,39.3799957 73.6919975,39.1679978 74.196,39.0239971 C74.7000025,38.8799964 75.2159974,38.7599976 75.744,38.6639971 C76.3040028,38.5519965 76.8359975,38.4679974 77.34,38.4119971 C77.8440025,38.3559968 78.2879981,38.2759976 78.672,38.1719971 C79.0560019,38.0679966 79.3599989,37.9159981 79.584,37.7159971 C79.8080011,37.5159961 79.92,37.223999 79.92,36.8399971 C79.92,36.3919948 79.8360008,36.0319984 79.668,35.7599971 C79.4999992,35.4879957 79.2840013,35.2799978 79.02,35.1359971 C78.7559987,34.9919964 78.4600016,34.8959973 78.132,34.8479971 C77.8039984,34.7999968 77.4800016,34.7759971 77.16,34.7759971 C76.2959957,34.7759971 75.5760029,34.9399954 75,35.2679971 C74.4239971,35.5959987 74.1120002,36.2159925 74.064,37.1279971 L72.024,37.1279971 C72.0560002,36.3599932 72.2159986,35.7119997 72.504,35.1839971 C72.7920014,34.6559944 73.1759976,34.2279987 73.656,33.8999971 C74.1360024,33.5719954 74.6839969,33.3359978 75.3,33.1919971 C75.9160031,33.0479964 76.5759965,32.9759971 77.28,32.9759971 C77.8400028,32.9759971 78.3959972,33.0159967 78.948,33.0959971 C79.5000028,33.1759975 79.9999978,33.3399958 80.448,33.5879971 C80.8960022,33.8359983 81.2559986,34.1839948 81.528,34.6319971 C81.8000014,35.0799993 81.936,35.6639935 81.936,36.3839971 L81.936,42.7679971 C81.936,43.2479995 81.9639997,43.599996 82.02,43.8239971 C82.0760003,44.0479982 82.2639984,44.1599971 82.584,44.1599971 C82.7600009,44.1599971 82.9679988,44.1199975 83.208,44.0399971 L83.208,45.6239971 Z M79.896,39.2639971 C79.6399987,39.455998 79.3040021,39.5959966 78.888,39.6839971 C78.4719979,39.7719975 78.0360023,39.8439968 77.58,39.8999971 C77.1239977,39.9559974 76.6640023,40.0199967 76.2,40.0919971 C75.7359977,40.1639974 75.3200018,40.2799963 74.952,40.4399971 C74.5839982,40.5999979 74.2840012,40.8279956 74.052,41.1239971 C73.8199988,41.4199986 73.704,41.8239945 73.704,42.3359971 C73.704,42.6719988 73.7719993,42.9559959 73.908,43.1879971 C74.0440007,43.4199982 74.2199989,43.6079964 74.436,43.7519971 C74.6520011,43.8959978 74.9039986,43.9999968 75.192,44.0639971 C75.4800014,44.1279974 75.7839984,44.1599971 76.104,44.1599971 C76.7760034,44.1599971 77.3519976,44.067998 77.832,43.8839971 C78.3120024,43.6999962 78.7039985,43.4679985 79.008,43.1879971 C79.3120015,42.9079957 79.5359993,42.6039987 79.68,42.2759971 C79.8240007,41.9479954 79.896,41.6399985 79.896,41.3519971 L79.896,39.2639971 Z M93.528,37.2479971 L95.64,37.2479971 C95.5599996,36.5119934 95.3680015,35.8759998 95.064,35.3399971 C94.7599985,34.8039944 94.3720024,34.3599988 93.9,34.0079971 C93.4279976,33.6559953 92.8840031,33.3959979 92.268,33.2279971 C91.6519969,33.0599962 90.9920035,32.9759971 90.288,32.9759971 C89.3119951,32.9759971 88.4560037,33.1479954 87.72,33.4919971 C86.9839963,33.8359988 86.3720024,34.3079941 85.884,34.9079971 C85.3959976,35.5080001 85.0320012,36.211993 84.792,37.0199971 C84.5519988,37.8280011 84.432,38.6959924 84.432,39.6239971 C84.432,40.5520017 84.5559988,41.4039932 84.804,42.1799971 C85.0520012,42.956001 85.4199976,43.6239943 85.908,44.1839971 C86.3960024,44.7439999 87.0039964,45.1759956 87.732,45.4799971 C88.4600036,45.7839986 89.2959953,45.9359971 90.24,45.9359971 C91.8240079,45.9359971 93.0759954,45.5200012 93.996,44.6879971 C94.9160046,43.8559929 95.4879989,42.6720048 95.712,41.1359971 L93.624,41.1359971 C93.4959994,42.0960019 93.1480028,42.8399944 92.58,43.3679971 C92.0119972,43.8959997 91.224005,44.1599971 90.216,44.1599971 C89.5759968,44.1599971 89.0240023,44.0319984 88.56,43.7759971 C88.0959977,43.5199958 87.7200014,43.1799992 87.432,42.7559971 C87.1439986,42.331995 86.9320007,41.8479998 86.796,41.3039971 C86.6599993,40.7599944 86.592,40.2 86.592,39.6239971 C86.592,38.999994 86.6559994,38.396 86.784,37.8119971 C86.9120006,37.2279942 87.1239985,36.7119993 87.42,36.2639971 C87.7160015,35.8159948 88.1119975,35.4559984 88.608,35.1839971 C89.1040025,34.9119957 89.7199963,34.7759971 90.456,34.7759971 C91.3200043,34.7759971 92.0079974,34.9919949 92.52,35.4239971 C93.0320026,35.8559992 93.3679992,36.4639932 93.528,37.2479971 L93.528,37.2479971 Z M100.824,33.2639971 L100.824,29.5439971 L98.784,29.5439971 L98.784,33.2639971 L96.672,33.2639971 L96.672,35.0639971 L98.784,35.0639971 L98.784,42.9599971 C98.784,43.536 98.8399994,43.9999953 98.952,44.3519971 C99.0640006,44.7039988 99.2359988,44.9759961 99.468,45.1679971 C99.7000012,45.359998 100.003998,45.4919967 100.38,45.5639971 C100.756002,45.6359974 101.207997,45.6719971 101.736,45.6719971 L103.296,45.6719971 L103.296,43.8719971 L102.36,43.8719971 C102.039998,43.8719971 101.780001,43.8599972 101.58,43.8359971 C101.379999,43.811997 101.224001,43.7599975 101.112,43.6799971 C100.999999,43.5999967 100.924,43.4879978 100.884,43.3439971 C100.844,43.1999964 100.824,43.0079983 100.824,42.7679971 L100.824,35.0639971 L103.296,35.0639971 L103.296,33.2639971 L100.824,33.2639971 Z M108.672,35.9279971 L108.672,33.2639971 L106.008,33.2639971 L106.008,35.9279971 L108.672,35.9279971 Z M106.008,43.0079971 L106.008,45.6719971 L107.424,45.6719971 C107.44,45.863998 107.428,46.071996 107.388,46.2959971 C107.348,46.5199982 107.272001,46.739996 107.16,46.9559971 C107.047999,47.1719982 106.900001,47.3719962 106.716,47.5559971 C106.531999,47.739998 106.304001,47.8799966 106.032,47.9759971 L106.032,49.1759971 C106.960005,48.9039957 107.635998,48.4400004 108.06,47.7839971 C108.484002,47.1279938 108.688,46.3440016 108.672,45.4319971 L108.672,43.0079971 L106.008,43.0079971 Z" />
                </g>
              </g>
            </svg>
            */}
          </div>
        </div>
        <div className={containerSessionLinks}>
          <div className={containerSessionLinksMenu}>
            <div>
              <span role="menuitem" tabIndex="0" className={containerSessionLinksMenuItem}>
                <div>
                  <div className={containerSessionLinksMenuItemText}>
                    <div>My Courses</div>
                  </div>
                </div>
              </span>
            </div>
            <div className={containerSessionLinksMenuSelect}>
              <button tabIndex="0" type="button" className={containerSessionLinksMenuSelectButton}>
                <div>
                  <svg viewBox="0 0 24 24" className={containerSessionLinksMenuSelectButtonImage}>
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CoursesHeader.defaultProps = coursesHeaderDefaultProps

CoursesHeader.propTypes = coursesHeaderPropTypes
