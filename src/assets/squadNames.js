const squadNames = [
"EMEABNLX ARCT BELU 1",
"EMEABNLX ARCT NL 1",
"EMEABNLX ARCY ALL 1",
"EMEABNLX C&I ALL 1",
"EMEABNLX MKTCT DSW 1",
"EMEABNLX MKTCT GBS 1",
"EMEABNLX MKTCT GTS 1",
"EMEABNLX MKTCT GTS 2",
"EMEABNLX MKTCT GTS IS SWS 1",
"EMEABNLX MKTCT GTS PBS GBS IS SWS 1",
"EMEABNLX MKTCT GTS SO 1",
"EMEABNLX MKTCT HW 1",
"EMEABNLX MKTCT PBS GBS 1",
"EMEABNLX MKTCT TSS BP 1",
"EMEABNLX MKTCT TSS DIRECT 1",
"EMEABNLX MKTCT TSS ESA 1",
"EMEABNLX MKTCY GBS IS 1",
"EMEABNLX MKTCY GBS IS 2",
"EMEABNLX MKTCY TSS ESA 1",
"EMEACBN MKTCT HW 1",
"EMEACEE ARCT CENTRAL 1",
"EMEACEE ARCT HU CNS 1",
"EMEACEE ARCT RCIS PAB 1",
"EMEACEE ARCT SEE 1",
"EMEACEE MKTCT DSW 1",
"EMEACEE MKTCT GBS IS SWS 1",
"EMEACEE MKTCT GBS IS SWS 2",
"EMEACEE MKTCT GBS IS SWS 3",
"EMEACEE MKTCT HW 1",
"EMEACEE MKTCT HW BCK 1",
"EMEACEE MKTCT PBS CERCIS 1",
"EMEACEE MKTCT PBS POLSEE 1",
"EMEACEE MKTCT TSS 1",
"EMEACEE MKTCT TSS 2",
"EMEACEE MKTCT TSS 3",
"EMEACEE MKTCY IS,GBS,SWS,GTS CZ,SK 1",
"EMEACEE MKTCY IS,GBS,SWS,GTS PL 1",
"EMEACEE MKTCY IS,GBS,SWS,GTS RCIS 1",
"EMEACEE MKTCY IS,GBS,SWS,GTS SEE 1",
"EMEACND ARCT ALL 1",
"EMEADACH ARCT ALPS 1",
"EMEADACH ARCT DACH BP INV 1",
"EMEADACH ARCT GER 1",
"EMEADACH ARCT GER 2",
"EMEADACH ARCT GER 3",
"EMEADACH ARCY ALL 1",
"EMEADACH ARCY GER DISP INV 2",
"EMEADACH C&I ALL BMW/ALLIANZ",
"EMEADACH C&I ALL CH",
"EMEADACH C&I ALL DAIMLER",
"EMEADACH C&I ALL DeBa",
"EMEADACH C&I ALL DTuFI",
"EMEADACH C&I ALL LH",
"EMEADACH C&I ALL VW",
"EMEADACH MKT ALL AT LTS",
"EMEADACH MKT ALL AT Solutions",
"EMEADACH MKT ALL CH",
"EMEADACH MKT ALL DE Claims",
"EMEADACH MKT ALL DE NOD",
"EMEADACH MKT ALL DE TSS",
"EMEADACH MKTCT ALPS 1",
"EMEADACH MKTCT ALPS 2",
"EMEADACH MKTCT ALPS 3",
"EMEADACH MKTCT DSW BP 1",
"EMEADACH MKTCT DSW DIRECT 1",
"EMEADACH MKTCT GBS 1",
"EMEADACH MKTCT GBS 2",
"EMEADACH MKTCT GBS 3",
"EMEADACH MKTCT GBS 4",
"EMEADACH MKTCT GBS 5",
"EMEADACH MKTCT GBS 6",
"EMEADACH MKTCT HW 1",
"EMEADACH MKTCT HW 2",
"EMEADACH MKTCT HW BCK 1",
"EMEADACH MKTCT HW INV 1",
"EMEADACH MKTCT IS 1",
"EMEADACH MKTCT IS 2",
"EMEADACH MKTCT IS 3",
"EMEADACH MKTCT IS 4",
"EMEADACH MKTCT IS OTO BA 1",
"EMEADACH MKTCT ITS 1",
"EMEADACH MKTCT SO ALPS 1",
"EMEADACH MKTCT SO GERMANY 1",
"EMEADACH MKTCT SO RFS CU ATCH 1",
"EMEADACH MKTCT SO RFS CU DE 1",
"EMEADACH MKTCT SO RFS LARGE 1",
"EMEADACH MKTCT SW ESW 1",
"EMEADACH MKTCT SWS 1",
"EMEADACH MKTCT SWS 2",
"EMEADACH MKTCT TSS BP 1",
"EMEADACH MKTCT TSS BP 2",
"EMEADACH MKTCT TSS BP 3",
"EMEADACH MKTCT TSS BP 4",
"EMEADACH MKTCT TSS Direct 1",
"EMEADACH MKTCT TSS Direct 2",
"EMEADACH MKTCT TSS Direct 3",
"EMEADACH MKTCT TSS Dispute 1",
"EMEADACH MKTCT TSS PerCall 1",
"EMEADACH MKTCY ALL DE Defense 1",
"EMEADACH MKTCY ALL DE Defense 2",
"EMEADACH MKTCY ALL DE PUB 1",
"EMEADACH MKTCY ALL DE PUB 2",
"EMEAFRA ARCT ALL 1",
"EMEAFRA ARCT ALL 2",
"EMEAFRA ARCT ALL 3",
"EMEAFRA ARCT ALL 4",
"EMEAFRA ARCY ALL 1",
"EMEAFRA ARCY ALL 2",
"EMEAFRA C&I ALL 1",
"EMEAFRA C&I ALL 2",
"EMEAFRA MKTCT DSW 1",
"EMEAFRA MKTCT GBS 1",
"EMEAFRA MKTCT HW Q2C 1",
"EMEAFRA MKTCT ITS 1",
"EMEAFRA MKTCT SO 1",
"EMEAFRA MKTCT SW ESW 1",
"EMEAFRA MKTCT TSS BP 1",
"EMEAFRA MKTCT TSS BP 2",
"EMEAFRA MKTCT TSS DIRECT 1",
"EMEAFRA MKTCT TSS DIRECT 2",
"EMEAFRA MKTCT TSS DIRECT 3",
"EMEAFRA MKTCY BOS 1",
"EMEAFRA MKTCY GBS 1",
"EMEAFRA MKTCY GBS 2",
"EMEAFRA MKTCY HW Q2C 1",
"EMEAFRA MKTCY IS 1",
"EMEAFRA MKTCY IS 2",
"EMEAFRA MKTCY IS 3",
"EMEAFRA MKTCY OIO 1",
"EMEAFRA MKTCY PUB TENDER CM 1",
"EMEAFRA MKTCY SWS 1",
"EMEAFRA MKTCY TSS 1",
"EMEAFRA MKTCY TSS 2",
"EMEAFRA SDCY ALL 1",
"EMEAFRA SDCY ALL 2",
"EMEAITA ARCT ALL 1",
"EMEAITA ARCT ALL 2",
"EMEAITA ARCT ALL 3",
"EMEAITA ARCT ALL 4",
"EMEAITA ARCY ALL 1",
"EMEAITA ARCY ALL 2",
"EMEAITA C&I ALL 1",
"EMEAITA MKTCT DSW 1",
"EMEAITA MKTCT HW 1",
"EMEAITA MKTCT HW BCK 2",
"EMEAITA MKTCT PBS GBS 1",
"EMEAITA MKTCT PBS ITS 1",
"EMEAITA MKTCT TSS BP 1",
"EMEAITA MKTCT TSS Direct 1",
"EMEAITA MKTCY GBS 1",
"EMEAITA MKTCY GBS SO SWS 1",
"EMEAITA MKTCY HW 1",
"EMEAITA MKTCY IS 1",
"EMEAITA MKTCY IS 2",
"EMEAITA MKTCY OIO 1",
"EMEAITA MKTCY PUB TENDER 1",
"EMEAITA MKTCY RFS 1",
"EMEAITA MKTCY SW SWS 1",
"EMEAITA MKTCY TSS 1",
"EMEAITA SDCY ALL 1",
"EMEAMEA ARCT ALL 1",
"EMEAMEA ARCT CWA&EAW 1",
"EMEAMEA ARCT NAF 1",
"EMEAMEA ARCT SAF 1",
"EMEAMEA ARCY EGYPT 1",
"EMEAMEA ARCY MEP 1",
"EMEAMEA C&I ALL 1",
"EMEAMEA MKTCT ALL 1",
"EMEAMEA MKTCT ALL 2",
"EMEAMEA MKTCT GBS 1",
"EMEAMEA MKTCT GBS 2",
"EMEAMEA MKTCT GBS 3",
"EMEAMEA MKTCT HW 1",
"EMEAMEA MKTCT HW 2",
"EMEAMEA MKTCT RFS 1",
"EMEAMEA MKTCT SWS 1",
"EMEAMEA MKTCT TSS 1",
"EMEAMEA MKTCT TSS 2",
"EMEAMEA MKTCT TSS 3",
"EMEAMEA MKTCT TSS 4",
"EMEAMEA MKTCY PBS 1",
"EMEAMEA MKTCY PBS 2",
"EMEANA ARCT CSOL B2B 1",
"EMEANA ARCT CSOL B2B 2",
"EMEANORD ARCT DK&NO 1",
"EMEANORD ARCT SE&FI 1",
"EMEANORD ARCY ALL 1",
"EMEANORD C&I ALL 1",
"EMEANORD C&I ALL 2",
"EMEANORD MKTCT DSW 1",
"EMEANORD MKTCT GBS&SO 1",
"EMEANORD MKTCT GBS&SO 2",
"EMEANORD MKTCT GBS 1",
"EMEANORD MKTCT GBS 2",
"EMEANORD MKTCT HW 1",
"EMEANORD MKTCT IS 1",
"EMEANORD MKTCT PBS GBS 1",
"EMEANORD MKTCT PBS GBS 2",
"EMEANORD MKTCT PBS ITO 1",
"EMEANORD MKTCT PBS ITS 1",
"EMEANORD MKTCT PBS SO 1",
"EMEANORD MKTCT PBS SO 2",
"EMEANORD MKTCT SO RFS 1",
"EMEANORD MKTCT SO RFS 2",
"EMEANORD MKTCT SO RFS 3",
"EMEANORD MKTCT SWS 1",
"EMEANORD MKTCT TSS 1",
"EMEANORD MKTCT TSS 2",
"EMEASPGI ARCT ES 1",
"EMEASPGI ARCT ES 2",
"EMEASPGI ARCT ES 3",
"EMEASPGI ARCT IS 1",
"EMEASPGI ARCT PT GR 1",
"EMEASPGI ARCY ALL 1",
"EMEASPGI C&I ALL 1",
"EMEASPGI MKTCT DSW 1",
"EMEASPGI MKTCT HW 1",
"EMEASPGI MKTCT PBS 1",
"EMEASPGI MKTCT PBS 2",
"EMEASPGI MKTCT PBS 3",
"EMEASPGI MKTCT PBS 4",
"EMEASPGI MKTCT SW ESW L1 1",
"EMEASPGI MKTCT TSS 1",
"EMEASPGI MKTCT TSS 2",
"EMEASPGI MKTCT TSS HW 1",
"EMEASPGI MKTCT TSS HW 2",
"EMEASPGI MKTCY ALL GR 1",
"EMEASPGI MKTCY ALL PT 1",
"EMEASPGI MKTCY BM PRI IL 1",
"EMEASPGI MKTCY PBS IL 1",
"EMEASPGI MKTCY TSS HW IL 1",
"EMEAUKI ARCT ALL 1",
"EMEAUKI ARCT ALL 2",
"EMEAUKI ARCT ALL 3",
"EMEAUKI ARCT ALL 4",
"EMEAUKI ARCY ALL 1",
"EMEAUKI BPCT HW 1",
"EMEAUKI C&I ALL 1",
"EMEAUKI C&I ALL 2",
"EMEAUKI C&I ALL 3",
"EMEAUKI MKTCT GBS 1",
"EMEAUKI MKTCT GBS 2",
"EMEAUKI MKTCT GBS 3",
"EMEAUKI MKTCT GBS 4",
"EMEAUKI MKTCT HW 1",
"EMEAUKI MKTCT IS 1",
"EMEAUKI MKTCT IS 2",
"EMEAUKI MKTCT IS 3",
"EMEAUKI MKTCT PGMS 1",
"EMEAUKI MKTCT PGMS 2",
"EMEAUKI MKTCT SW ESW 1",
"EMEAUKI MKTCT SWS 1",
"EMEAUKI MKTCT SWS 2",
"EMEAUKI MKTCT TSS 1",
"EMEAUKI MKTCT TSS 2",
"EMEAUKI MKTCT TSS 3",
"EMEAUKI MKTCT TSS 4",
"EMEAUKI MKTCT TSS 5",
"EMEAUKI MKTCT TSS 6",
"EMEAUKI MKTCY PBS 1",
"EMEAUKI MKTCY PGMS 1",
"EMEAUKI MKTCY TSS 1",
"EMEAUKI MKTCY TSS BP RENEWAL 1",
"EMEAWW BPCT CROSS 1",
"EMEAXIMT AR B2B ONBOARDING 1",
"EMEAXIMT ARCT COMPLIANCE 1",
"EMEAXIMT ARCT LT 1",
"EMEAXIMT BPCT ALL 1",
"EMEAXIMT BPCT ALL 2",
"EMEAXIMT BPCT ALL 3",
"EMEAXIMT BPCT ALL 4",
"EMEAXIMT BPCT ALL 5",
"EMEAXIMT BPCT ALL 6",
"EMEAXIMT BPCT ALL 7",
"EMEAXIMT BPCT ALL 8",
"EMEAXIMT BPCT BPD 1",
"EMEAXIMT BPCT BPD 10",
"EMEAXIMT BPCT BPD 11",
"EMEAXIMT BPCT BPD 12",
"EMEAXIMT BPCT BPD 13",
"EMEAXIMT BPCT BPD 14",
"EMEAXIMT BPCT BPD 15",
"EMEAXIMT BPCT BPD 16",
"EMEAXIMT BPCT BPD 2",
"EMEAXIMT BPCT BPD 3",
"EMEAXIMT BPCT BPD 4",
"EMEAXIMT BPCT BPD 5",
"EMEAXIMT BPCT BPD 6",
"EMEAXIMT BPCT BPD 7",
"EMEAXIMT BPCT BPD 8",
"EMEAXIMT BPCT BPD 9",
"EMEAXIMT COMPCT BPSO 1",
"EMEAXIMT COMPCT HW 1",
"EMEAXIMT COMPCT Svces AG 1",
"EMEAXIMT COMPCT Svces Europe 1",
"EMEAXIMT COMPCT Svces Europe 2",
"EMEAXIMT COMPCT SW 1",
"EMEAXIMT COMTCT Complaints 1",
"EMEAXIMT COMTCT Complaints 2",
"EMEAXIMT CT L1 Support 1",
"EMEAXIMT CT MCT/TCV 1",
"EMEAXIMT MKTCT ACQ 1",
"EMEAXIMT MKTCT ALL 1",
"EMEAXIMT MKTCT ALL 2",
"EMEAXIMT MKTCT ALL 3",
"EMEAXIMT MKTCT ASCM 1",
"EMEAXIMT MKTCT B2C 1",
"EMEAXIMT MKTCT CADM 1",
"EMEAXIMT MKTCT DSW AR 1",
"EMEAXIMT MKTCT DSW DISPUTE 1",
"EMEAXIMT MKTCT ESOS 1",
"EMEAXIMT MKTCT GTS 1",
"EMEAXIMT MKTCT HW IERP 1",
"EMEAXIMT MKTCT HW SME 1",
"EMEAXIMT MKTCT ICA UKISA CEMA",
"EMEAXIMT MKTCT LAB 1",
"EMEAXIMT MKTCT MV BID NORD DACH",
"EMEAXIMT MKTCT OOPC 1",
"EMEAXIMT MKTCT OOPC 2",
"EMEAXIMT MKTCT RT RPQ DR 1",
"EMEAXIMT MKTCT SCM 1",
"EMEAXIMT MKTCT SO RFS 1",
"EMEAXIMT MKTCT SO RFS SMALL 1",
"EMEAXIMT MKTCT SW BILL 1",
"EMEAXIMT MKTCT SW DSW FCT PSP 1",
"EMEAXIMT MKTCT SW ECM 1",
"EMEAXIMT MKTCT SW ECM 2",
"EMEAXIMT MKTCT SW ECM 3",
"EMEAXIMT MKTCT SW ESA",
"EMEAXIMT MKTCT SW ESW 1",
"EMEAXIMT MKTCT SW ESW 2",
"EMEAXIMT MKTCT SW ESW 3",
"EMEAXIMT MKTCT SW ESW 4",
"EMEAXIMT MKTCT SW LICENSE 1",
"EMEAXIMT MKTCT SW Q2C L1 1",
"EMEAXIMT MKTCT SW Q2C L1 2",
"EMEAXIMT MKTCT SW Q2C L1 3",
"EMEAXIMT MKTCT SW Q2C L1 4",
"EMEAXIMT MKTCT SW SCRT 1",
"EMEAXIMT MKTCT SW SCRT 2",
"EMEAXIMT MKTCT SW SWAP 1"
]

export default squadNames
