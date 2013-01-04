<?xml version="1.0" encoding="UTF-8" ?>
<!-- Character sheet based on the eTools character sheet created by Art Turban -->
<!-- Created with consent from Art Turban -->
<!-- Created by Nebular, nebular@shaw.ca -->
<!-- Turn and Rage templates based on designs provided by Ambush -->
<!-- Version 1.9.5 (October 4, 2008) -->
<!-- For use with RPGXplorer 1.9.5 http://www.rpgxplorer.com/" -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:include href="config/config.xsl"/>
	<xsl:include href="config/rage.xsl"/>
	<xsl:include href="config/turning.xsl"/>
	<xsl:output method="html" indent="no" encoding="UTF-8"/>
	<xsl:variable name="lcletters">abcdefghijklmnopqrstuvwxyz</xsl:variable>
	<xsl:variable name="ucletters">ABCDEFGHIJKLMNOPQRSTUVWXYZ</xsl:variable>
	<xsl:variable name="removeplus">+</xsl:variable>
	<xsl:variable name="replaceplus"> </xsl:variable>
	<xsl:variable name="removepercent">%</xsl:variable>
	<xsl:variable name="replacepercent"></xsl:variable>
	<xsl:variable name="removeft">ft.</xsl:variable>
	<xsl:variable name="replaceft"></xsl:variable>
	<xsl:variable name="removebab">+/</xsl:variable>
	<xsl:variable name="replacebab"></xsl:variable>
  
  <xsl:variable name="removeNewline">#10;</xsl:variable>
  <xsl:variable name="replaceNewline"><br /></xsl:variable>
  <xsl:template name="format-literal-content-helper">
    <xsl:param name="text"/>
    <xsl:variable name="linebreak" select="'&#10;'"/>
    <xsl:choose>
      <xsl:when test="contains($text,$linebreak)">
        <xsl:value-of select="substring-before($text,$linebreak)" disable-output-escaping="yes"/>
        <br/>
        <xsl:call-template name="format-literal-content-helper">
          <xsl:with-param name="text" select="substring-after($text,$linebreak)"/>
        </xsl:call-template>
      </xsl:when>
      <xsl:otherwise><xsl:value-of select="$text" disable-output-escaping="yes"/></xsl:otherwise>
    </xsl:choose>
  </xsl:template>
  
	<xsl:template match="/CharacterXMLDataset/Character">
	
		<xsl:variable name="portrait-image" select="Portrait"/>
		<xsl:variable name="heavy" select="substring-before(substring-after(HeavyLoadInfo, 'to '), ' lb.')"/>
	
	<xsl:variable name="natbab" select="translate(substring(BAB1, 1, 3), $removebab, $replacebab)"/>

    <html>
			<head>
				<title><xsl:value-of select="CharacterName"/></title>
				<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
				<style>
          DIV.description {
          FONT-SIZE: 9pt; FONT-FAMILY: Times New Roman, Times Roman, serif
          }
          DIV.description P {
          MARGIN: 6pt 8pt; TEXT-INDENT: 12pt
          }
          DIV.description TABLE {
          MARGIN: 6pt 14pt; TEXT-INDENT: 0pt
          }
          DIV.description TD {
          PADDING-RIGHT: 6pt; PADDING-LEFT: 6pt; FONT-SIZE: 9pt; PADDING-BOTTOM: 0pt; TEXT-INDENT: 0pt; PADDING-TOP: 0pt; FONT-FAMILY: Times New Roman, Times Roman, serif
          }
          DIV.description UL {
          MARGIN-TOP: 0pt; LEFT: -10pt; POSITION: relative; TOP: 0pt
          }
          .symbol8 {
          FONT-SIZE: 8pt; FONT-FAMILY: Wingdings
          }
          .v1 {
          FONT-SIZE: 1pt; FONT-FAMILY: Verdana
          }
          .v2 {
          FONT-SIZE: 2pt; FONT-FAMILY: Verdana
          }
          .v3 {
          FONT-SIZE: 3pt; FONT-FAMILY: Verdana
          }
          .v4 {
          FONT-SIZE: 4pt; FONT-FAMILY: Verdana
          }
          .v5 {
          FONT-SIZE: 5pt; FONT-FAMILY: Verdana
          }
          .v6 {
          FONT-SIZE: 6pt; FONT-FAMILY: Verdana
          }
          .v7 {
          FONT-SIZE: 7pt; FONT-FAMILY: Verdana
          }
          .v8 {
          FONT-SIZE: 8pt; FONT-FAMILY: Verdana
          }
          .v9 {
          FONT-SIZE: 9pt; FONT-FAMILY: Verdana
          }
          .v10 {
          FONT-SIZE: 10pt; FONT-FAMILY: Verdana
          }
          .v5w {
          FONT-SIZE: 5pt; COLOR: white; FONT-FAMILY: Verdana
          }
          .v6w {
          FONT-SIZE: 6pt; COLOR: white; FONT-FAMILY: Verdana
          }
          .v7w {
          FONT-SIZE: 7pt; COLOR: white; FONT-FAMILY: Verdana
          }
          .v8w {
          FONT-SIZE: 8pt; COLOR: white; FONT-FAMILY: Verdana
          }
          .v9w {
          FONT-SIZE: 9pt; COLOR: white; FONT-FAMILY: Verdana
          }
          .v10w {
          FONT-SIZE: 10pt; COLOR: white; FONT-FAMILY: Verdana
          }
          .versionInfo {
          MARGIN-TOP: 0ex; FONT-SIZE: 5pt; MARGIN-BOTTOM: 0ex; FONT-FAMILY: Verdana; TEXT-ALIGN: center
          }
          .itemName {
          MARGIN-TOP: 0ex; FONT-WEIGHT: bold; FONT-SIZE: 7pt; MARGIN-BOTTOM: 0ex; MARGIN-LEFT: 1ex; FONT-FAMILY: Verdana; TEXT-ALIGN: left
          }
          .itemNameDetail {
          MARGIN-TOP: 0ex; FONT-WEIGHT: normal; FONT-SIZE: 6pt; MARGIN-BOTTOM: 0ex; MARGIN-LEFT: 0ex; FONT-FAMILY: Verdana; TEXT-ALIGN: left
          }
          .itemDetail {
          MARGIN-TOP: 0ex; FONT-SIZE: 7pt; MARGIN-BOTTOM: 0ex; MARGIN-LEFT: 0ex; FONT-FAMILY: Verdana; TEXT-ALIGN: center
          }
          .containerHead {
          background-color: #DDDDDD; MARGIN-TOP: 0ex; FONT-WEIGHT: bold; FONT-SIZE: 8pt; MARGIN-BOTTOM: 0ex; MARGIN-LEFT: 1ex; TEXT-TRANSFORM: uppercase; COLOR: #000000; FONT-FAMILY: Verdana; TEXT-ALIGN: left; border-bottom:1px solid #000000;
          }
          .weaponHand {
          FONT-SIZE: 9pt; VERTICAL-ALIGN: top; FONT-FAMILY: Wingdings; TEXT-ALIGN: left
          }
          .weaponTwoHanded {
          FONT-SIZE: 6pt; VERTICAL-ALIGN: bottom; FONT-FAMILY: Verdana
          }
          .weaponThrown {
          FONT-SIZE: 9pt; VERTICAL-ALIGN: top; FONT-FAMILY: Wingdings3; TEXT-ALIGN: left
          }
          .loadText {
          MARGIN-TOP: 0ex; FONT-SIZE: 6pt; MARGIN-BOTTOM: 0ex; TEXT-TRANSFORM: uppercase; FONT-FAMILY: Verdana; TEXT-ALIGN: center
          }
          .loadTotalCarried {
          MARGIN-TOP: 0ex; FONT-WEIGHT: bold; FONT-SIZE: 8pt; MARGIN-BOTTOM: 0ex; FONT-FAMILY: Verdana; TEXT-ALIGN: center
          }
          .classFeatureHead {
          MARGIN-TOP: 0ex; FONT-WEIGHT: bold; FONT-SIZE: 7pt; MARGIN-BOTTOM: 0ex; MARGIN-LEFT: 1ex; TEXT-TRANSFORM: uppercase; COLOR: #666666; FONT-FAMILY: Verdana; TEXT-ALIGN: left
          }
          .classFeatureText {
          MARGIN-TOP: 0ex; FONT-SIZE: 8pt; MARGIN-BOTTOM: 0ex; MARGIN-LEFT: 1ex; FONT-FAMILY: Verdana; TEXT-ALIGN: left
          }
          .tableHeadingText {
          MARGIN-TOP: 0ex; FONT-WEIGHT: bold; FONT-SIZE: 9pt; MARGIN-BOTTOM: 0ex; MARGIN-LEFT: 1ex; TEXT-TRANSFORM: uppercase; COLOR: #ffffff; FONT-FAMILY: Verdana
          }
          .tableBodyText {
          MARGIN-TOP: 0ex; FONT-SIZE: 7pt; MARGIN-BOTTOM: 0ex; FONT-FAMILY: Verdana
          }
          .tableColumnText {
          MARGIN-TOP: 0ex; FONT-WEIGHT: bold; FONT-SIZE: 6pt; MARGIN-BOTTOM: 0ex; TEXT-TRANSFORM: uppercase; COLOR: #ffffff; FONT-FAMILY: Verdana; TEXT-ALIGN: center
          }
          .featText {
          MARGIN-TOP: 0ex; FONT-SIZE: 7pt; MARGIN-BOTTOM: 0ex; MARGIN-LEFT: 1ex; FONT-FAMILY: Verdana; TEXT-ALIGN: left
          }
          .italic {
          FONT-STYLE: italic
          }
          .bold {
          FONT-WEIGHT: bold
          }
          .upCase {
          TEXT-TRANSFORM: uppercase
          }
          .cellUnderline {
          BORDER-BOTTOM: black 1px solid
          }
          .tableHeading {
          BORDER-TOP: black 1px solid; BORDER-BOTTOM: black 1px solid; BACKGROUND-COLOR: #000000
          }
          .tableSubHeading {
          BORDER-TOP: #dddddd 1px solid; BORDER-BOTTOM: #dddddd 1px solid; BACKGROUND-COLOR: #dddddd
          }
          A {
          color: #000000;
          text-decoration: none;
          }
          .tableSubHeadingTopRuled {
          background-color:#DDDDDD;
          border-top:1px solid #000000;
          border-bottom:1px solid #DDDDDD;
          }
          .tableSubColumnText {
          font-family:Verdana;
          font-size:6pt;
          font-weight:bold;
          color:#000000;
          text-align:center;
          text-transform:uppercase;
          margin-bottom:0ex;
          margin-top:0ex;
          }
          .cellRangeIncHeading {
          background-color:#666666;
          xborder-right:1px solid white;
          }
          .cellRangeIncHeadingText {
          font-family: Verdana;
          font-size:6pt;
          font-weight:bold;
          color:#FFFFFF;
          text-align:center;
          text-transform:uppercase;
          }
          .cellRangeIncTop {
          background-color:#DDDDDD;
          border-right:1px solid white;
          }
          .cellRangeIncBottom {
          background-color:#DDDDDD;
          border-right:1px solid white;
          border-top:1px solid white;
          }
          .cellRangeIncText {
          font-family: Verdana;
          font-size:6pt;
          text-align:center;
          }
          .cellRangeIncTextHvy {
          font-family: Verdana;
          font-size:6pt;
          font-weight:bold;
          text-align:center;
          }
        </style>
			</head>
			<body bgColor="white">
				<table cellSpacing="0" cellPadding="0" width="100%" border="0">
					<tbody>
						<tr>
							<td vAlign="top" align="left" width="83%">
								<table cellSpacing="0" cellPadding="0" width="100%" border="0">
									<tbody>
										<tr vAlign="bottom">
											<td style="BORDER-BOTTOM: black 1pt solid"><b><font style="FONT-SIZE: 12pt" face="ForgottenUncial, timesnewroman, Verdana"><xsl:value-of select="CharacterName"/></font></b></td>
											<td style="BORDER-BOTTOM: black 1pt solid" align="right"><font style="FONT-SIZE: 10pt" face="ForgottenUncial, timesnewroman, Verdana"><xsl:value-of select="PlayerName"/></font></td>
										</tr>
									</tbody></table>
								<table cellSpacing="0" cellPadding="0" width="100%" border="0">
									<tbody>
										<tr>
											<td class="v6w" align="middle" bgColor="black"><b>CHARACTER BIO</b></td>
										</tr>
										<tr>
											<td class="v8"><b><xsl:value-of select="CharacterName"/></b> is a <b><xsl:value-of select="Age"/></b> year old, <b><xsl:value-of select="Size"/></b> sized,
												<b><xsl:value-of select="Gender"/></b><xsl:text> </xsl:text><b><xsl:value-of select="Race"/></b>
													<xsl:choose>
														<xsl:when test="FullType">
													(<b><xsl:value-of select="FullType"/></b>).
														</xsl:when>
														<xsl:otherwise>
													(<b>Humanoid</b>).
														</xsl:otherwise>
													</xsl:choose>
												Stands <b><xsl:value-of select="Height"/></b> tall and weighs <b><xsl:value-of select="Weight"/></b> World view 
												is <b><xsl:value-of select="Alignment"/></b> in nature.
												<xsl:if test="Deity != ''">
													Currently a worshiper of <b><xsl:value-of select="Deity"/></b><i>
													<xsl:if test="Domains/Domain">
													(<xsl:for-each select="Domains/Domain">
														<a target="domain"><xsl:attribute name="href"><xsl:value-of select="HelpPage"/></xsl:attribute><xsl:value-of select="DomainName"/></a><xsl:if test="position() != last()">, </xsl:if>
													</xsl:for-each>)</xsl:if>.</i>
												</xsl:if>
											</td>
										</tr>
										<tr>
											<td class="v1" style="BORDER-BOTTOM: black 1px solid"><br/>
											</td>
										</tr>
									</tbody></table>
								<table cellSpacing="0" cellPadding="0" width="100%" border="0">
									<tbody>
										<tr bgColor="#dddddd">
											<td class="v6" align="middle" width="20%"><b>CHARACTER LEVEL</b></td>
											<td class="v6" align="left" width="80%"><b>CLASSES and LEVELS</b></td>
										</tr>
										<tr>
											<td class="v8" align="middle"><xsl:value-of select="Level"/></td>
											<td class="v8" align="left">
												<xsl:for-each select="Classes/Class">
													<a target="class"><xsl:attribute name="href"><xsl:value-of select="HelpPage"/></xsl:attribute><xsl:value-of select="ClassName"/></a><xsl:text> </xsl:text><xsl:value-of select="ClassLevel"/>
													<xsl:if test="position() != last()"> / </xsl:if>
												</xsl:for-each>
											</td>
										</tr>
										<tr>
											<td class="v1" style="BORDER-BOTTOM: black 1px solid" colSpan="2"><br/>
											</td>
										</tr>
									</tbody></table>
								<table cellSpacing="0" cellPadding="0" width="100%" border="0">
									<tbody>
										<tr bgColor="#dddddd">
											<td class="v6" align="middle" width="15%"><b>CURRENT EXPERIENCE</b></td>
											<td class="v6" align="middle" width="15%"><b>NEXT LEVEL AT</b></td>
											<td class="v6" align="middle" width="15%"><b>NEEDED TO MAKE LEVEL</b></td>
											<td class="v6" align="middle" width="35%"><b>EXPERIENCE GAINED IN PLAY</b></td>
										</tr>
										<tr vAlign="bottom">
											<xsl:variable name="totallevel" select="Level"/>
											<xsl:variable name="nextlevel" select="NextLevel"/>
											<xsl:variable name="xp" select="XP"/>
											<xsl:variable name="xp2go" select="($nextlevel - $xp)"/>
											<td class="v8" align="middle"><xsl:value-of select="format-number($xp, '###,###,##0')"/></td>
											<td class="v8" align="middle"><xsl:value-of select="format-number($nextlevel, '###,###,##0')"/></td>
											<td class="v8" align="middle"><xsl:value-of select="format-number($xp2go, '###,###,##0')"/></td>
											<td class="v8" align="middle"><br/>
											</td>
										</tr>
										<tr>
											<td class="v1" colSpan="4"><br/>
											</td>
										</tr>
									</tbody></table>
							</td>
							<td width="1%"><br/>
							</td>
							<td vAlign="top" align="right" width="17%">
								<p class="versionInfo">Character Sheet (RPGX) - v. 1.3.1</p>
								<xsl:if test="$portrait-image != ''">
									<img src="{$portrait-image}" height="154"/>
								</xsl:if>
							</td>
						</tr>
					</tbody></table>
				<table cellSpacing="0" cellPadding="0" width="100%" border="0">
					<tbody>
						<tr>
							<td class="v6w" style="BORDER-TOP: black 1px solid" align="middle" width="5%" bgColor="black">
								<b>HP<br/>TRACK</b>
							</td>
							<td class="v6" style="BORDER-TOP: black 1px solid" width="45%">
								<br/>
							</td>
							<td class="v6" style="BORDER-TOP: black 1px solid" align="middle" width="5%" bgColor="#dddddd">
								<b>NON<br/>LETHAL</b>
							</td>
							<td class="v6" style="BORDER-TOP: black 1px solid" width="20%">
								<br/>
							</td>
							<td class="v6w" style="BORDER-TOP: black 1px solid" align="middle" width="5%" bgColor="black">
								<b>AC<br/>TRACK</b>
							</td>
							<td class="v6" style="BORDER-TOP: black 1px solid" width="10%">
								<br/>
							</td>
						</tr>
						<tr>
							<td class="v1" style="BORDER-BOTTOM: black 2px solid" colSpan="6">
								<br/>
							</td>
						</tr>
						<tr>
							<td class="v3" colSpan="6">
								<br/>
							</td>
						</tr>
					</tbody>
				</table>
				
				<table cellSpacing="0" cellPadding="0" width="100%" bgColor="white" border="0">
					<tbody>
						<tr>
							<td width="15%"></td>
							<td width="10%"></td>
							<td width="20%"></td>
							<td width="13%"></td>
							<td width="12%"></td>
							<td width="14%"></td>
							<td width="16%"></td>
						</tr>
						<tr>
							<td vAlign="top" colSpan="2" rowSpan="2">
								<table width="100%">
									<tbody>
										<tr>
											<td class="v4" align="middle" width="24%">
												ABILITY<br/>NAME
											</td>
											<td class="v4" align="middle" width="19%">
												ABILITY<br/>SCORE
											</td>
											<td class="v4" align="middle" width="19%">
												ABILITY<br/>MODIFIER
											</td>
											<td class="v4" align="middle" width="19%">
												TEMPORARY<br/>SCORE
											</td>
											<td class="v4" align="middle" width="19%">
												TEMPORARY<br/>MODIFIER
											</td>
										</tr>
										<tr>
											<td class="v10w" align="middle" bgColor="black">
												<b>STR</b><br/>
											</td>
											<td class="v10" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="STR"/></b><br/>
											</td>
											<td class="v10" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="STRMod"/></b><br/>
											</td>
											<td style="BORDER-RIGHT: #dddddd 3px solid; BORDER-TOP: #dddddd 3px solid; BORDER-LEFT: #dddddd 3px solid; BORDER-BOTTOM: #dddddd 3px solid" align="middle">
												<br/>
											</td>
											<td style="BORDER-RIGHT: #dddddd 3px solid; BORDER-TOP: #dddddd 3px solid; BORDER-LEFT: #dddddd 3px solid; BORDER-BOTTOM: #dddddd 3px solid" align="middle">
												<br/>
											</td>
										</tr>
										<tr>
											<td class="v10w" align="middle" bgColor="black">
												<b>DEX</b><br/>
											</td>
											<td class="v10" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="DEX"/></b><br/>
											</td>
											<td class="v10" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="DEXMod"/></b><br/>
											</td>
											<td style="BORDER-RIGHT: #dddddd 3px solid; BORDER-TOP: #dddddd 3px solid; BORDER-LEFT: #dddddd 3px solid; BORDER-BOTTOM: #dddddd 3px solid" align="middle">
												<br/>
											</td>
											<td style="BORDER-RIGHT: #dddddd 3px solid; BORDER-TOP: #dddddd 3px solid; BORDER-LEFT: #dddddd 3px solid; BORDER-BOTTOM: #dddddd 3px solid" align="middle">
												<br/>
											</td>
										</tr>
										<tr>
											<td class="v10w" align="middle" bgColor="black">
												<b>CON</b><br/>
											</td>
											<td class="v10" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="CON"/></b><br/>
											</td>
											<td class="v10" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="CONMod"/></b><br/>
											</td>
											<td style="BORDER-RIGHT: #dddddd 3px solid; BORDER-TOP: #dddddd 3px solid; BORDER-LEFT: #dddddd 3px solid; BORDER-BOTTOM: #dddddd 3px solid" align="middle">
												<br/>
											</td>
											<td style="BORDER-RIGHT: #dddddd 3px solid; BORDER-TOP: #dddddd 3px solid; BORDER-LEFT: #dddddd 3px solid; BORDER-BOTTOM: #dddddd 3px solid" align="middle">
												<br/>
											</td>
										</tr>
										<tr>
											<td class="v10w" align="middle" bgColor="black">
												<b>INT</b><br/>
											</td>
											<td class="v10" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="INT"/></b><br/>
											</td>
											<td class="v10" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="INTMod"/></b><br/>
											</td>
											<td style="BORDER-RIGHT: #dddddd 3px solid; BORDER-TOP: #dddddd 3px solid; BORDER-LEFT: #dddddd 3px solid; BORDER-BOTTOM: #dddddd 3px solid" align="middle">
												<br/>
											</td>
											<td style="BORDER-RIGHT: #dddddd 3px solid; BORDER-TOP: #dddddd 3px solid; BORDER-LEFT: #dddddd 3px solid; BORDER-BOTTOM: #dddddd 3px solid" align="middle">
												<br/>
											</td>
										</tr>
										<tr>
											<td class="v10w" align="middle" bgColor="black">
												<b>WIS</b><br/>
											</td>
											<td class="v10" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="WIS"/></b><br/>
											</td>
											<td class="v10" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="WISMod"/></b><br/>
											</td>
											<td style="BORDER-RIGHT: #dddddd 3px solid; BORDER-TOP: #dddddd 3px solid; BORDER-LEFT: #dddddd 3px solid; BORDER-BOTTOM: #dddddd 3px solid" align="middle">
												<br/>
											</td>
											<td style="BORDER-RIGHT: #dddddd 3px solid; BORDER-TOP: #dddddd 3px solid; BORDER-LEFT: #dddddd 3px solid; BORDER-BOTTOM: #dddddd 3px solid" align="middle">
												<br/>
											</td>
										</tr>
										<tr>
											<td class="v10w" align="middle" bgColor="black">
												<b>CHA</b><br/>
											</td>
											<td class="v10" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="CHA"/></b><br/>
											</td>
											<td class="v10" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="CHAMod"/></b><br/>
											</td>
											<td style="BORDER-RIGHT: #dddddd 3px solid; BORDER-TOP: #dddddd 3px solid; BORDER-LEFT: #dddddd 3px solid; BORDER-BOTTOM: #dddddd 3px solid" align="middle">
												<br/>
											</td>
											<td style="BORDER-RIGHT: #dddddd 3px solid; BORDER-TOP: #dddddd 3px solid; BORDER-LEFT: #dddddd 3px solid; BORDER-BOTTOM: #dddddd 3px solid" align="middle">
												<br/>
											</td>
										</tr>
									</tbody></table>
							</td>
							<td vAlign="top" colSpan="5">
								<table width="100%" border="0">
									<tbody>
										<tr vAlign="bottom">
											<td></td>
											<td class="v4" vAlign="bottom" align="middle">
												TOTAL
											</td>
											<td class="v4" align="middle" colSpan="9">
												HIT DIE TYPE
											</td>
											<td class="v4" align="middle" colSpan="6">
												DAMAGE<br/>REDUCTION
											</td>
											<td></td>
											<td colSpan="2"></td>
											<td class="v4" align="middle" colSpan="6">
												MOVEMENT TYPES and RATES
											</td>
										</tr>
										<tr>
											<td class="v9w" align="middle" bgColor="black">
												<b>HP</b><br/><span class="v5w">POINTS</span>
											</td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="HP"/></b>
											</td>
											<td class="v7" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle" colSpan="9">
												<b>
												<xsl:for-each select="Classes/Class">
													<xsl:value-of select="ClassLevel"/><xsl:value-of select="HitDice"/>
													<xsl:if test="position() != last()"> + </xsl:if>
												</xsl:for-each>
												<xsl:if test="translate(CONMod, $removeplus, $replaceplus) != 0">
													<xsl:if test="(sum(Classes/Class/ClassLevel) * translate(CONMod, $removeplus, $replaceplus)) &gt; -1"><xsl:text> </xsl:text>+<xsl:text> </xsl:text></xsl:if>
													<xsl:value-of select="sum(Classes/Class/ClassLevel) * translate(CONMod, $removeplus, $replaceplus)"/>
												 </xsl:if>
												</b>
											</td>
											<td class="v7" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle" colSpan="6">
												<b><xsl:value-of select="DR"/><br/></b>
											</td>
											<td></td>
											<td class="v9w" align="middle" bgColor="black" colSpan="2">
												<b>SPEED</b><br/><span class="v5w">MOVE</span>
											</td>
											<td class="v8" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle" colSpan="6">
												<b>
												<xsl:if test="Speed">
													<xsl:value-of select="Speed"/>
													<xsl:if test="Fly or Climb or Swim or Burrow">,</xsl:if>
												</xsl:if>
												<xsl:if test="Fly">
													fly <xsl:value-of select="Fly"/>
													<xsl:if test="Climb or Swim or Burrow">,</xsl:if>
												</xsl:if>
												<xsl:if test="Climb">
													climb <xsl:value-of select="Climb"/>
													<xsl:if test="Swim or Burrow">,</xsl:if>
												</xsl:if>
												<xsl:if test="Swim">
													swim <xsl:value-of select="Swim"/>
													<xsl:if test="Burrow">,</xsl:if>
												</xsl:if>
												<xsl:if test="Burrow">
													burrow <xsl:value-of select="Burrow"/>
												</xsl:if>
												</b>
											</td>
										</tr>
										<tr>
											<td width="7%"></td>
											<td width="5%"></td>
											<td width="5%"></td>
											<td width="5%"></td>
											<td width="5%"></td>
											<td width="1%"></td>
											<td width="5%"></td>
											<td width="1%"></td>
											<td width="5%"></td>
											<td width="1%"></td>
											<td width="5%"></td>
											<td width="1%"></td>
											<td width="5%"></td>
											<td width="1%"></td>
											<td width="5%"></td>
											<td width="1%"></td>
											<td width="5%"></td>
											<td width="1%"></td>
											<td width="5%"></td>
											<td width="1%"></td>
											<td width="5%"></td>
											<td width="1%"></td>
											<td width="6%"></td>
											<td width="6%"></td>
											<td width="6%"></td>
											<td width="6%"></td>
										</tr>
										<tr>
											<td class="v9w" align="middle" bgColor="black">
												<b>AC</b><br/><span class="v5w">ARMOR</span>
											</td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="AC"/></b>
											</td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="ACFlatfooted"/></b>
											</td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="ACTouch"/></b>
											</td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="ACHelpless"/></b>
											</td>
											<td class="v7" align="middle"><b>=</b></td>
											<td class="v9" align="middle"><b>10</b></td>
											<td class="v7" align="middle"><b>+</b></td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="ArmorClass/ArmorBonus"/></b>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="ArmorClass/ShieldBonus"/></b>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="ArmorClass/DexBonus"/></b>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="ArmorClass/SizeBonus"/></b>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="ArmorClass/NaturalArmorBonus"/></b>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="AC - 10 - ArmorClass/ArmorBonus - ArmorClass/ShieldBonus - ArmorClass/DexBonus - ArmorClass/SizeBonus - ArmorClass/NaturalArmorBonus"/></b>
											</td>
											<td rowSpan="2"></td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><br/></b>
											</td>
											<td rowSpan="2"></td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="translate(SpellFailureArmor, $removepercent, $replacepercent) + translate(SpellFailureShield, $removepercent, $replacepercent)"/>%<br/></b>
											</td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b>
													<xsl:choose>
														<xsl:when test="EncumbranceCheckPenalty"><xsl:value-of select="EncumbranceCheckPenalty"/></xsl:when>
														<xsl:when test="ArmorCheckPenalty != '' and ShieldCheckPenalty != ''"><xsl:value-of select="ArmorCheckPenalty + ShieldCheckPenalty"/></xsl:when>
														<xsl:when test="ArmorCheckPenalty != ''"><xsl:value-of select="ArmorCheckPenalty"/></xsl:when>
														<xsl:when test="ShieldCheckPenalty != ''"><xsl:value-of select="ShieldCheckPenalty"/></xsl:when>
													</xsl:choose>
												<br/></b>
											</td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="ArmorMaxDex"/><br/></b>
											</td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><br/></b>
											</td>
										</tr>
										<tr>
											<td></td>
											<td class="v4" vAlign="top" align="middle">
												NORMAL
											</td>
											<td class="v4" align="middle">
												FLAT<br/>FOOTED
											</td>
											<td class="v4" align="middle">
												TOUCH<br/>AC
											</td>
											<td class="v4" align="middle">
												HELPLESS<br/>AC
											</td>
											<td></td>
											<td class="v4" vAlign="top" align="middle">
												BASE
											</td>
											<td></td>
											<td class="v4" align="middle">
												ARMOR<br/>BONUS
											</td>
											<td></td>
											<td class="v4" align="middle">
												SHIELD<br/>BONUS
											</td>
											<td></td>
											<td class="v4" align="middle">
												DEX<br/>BONUS
											</td>
											<td></td>
											<td class="v4" align="middle">
												SIZE<br/>BONUS
											</td>
											<td></td>
											<td class="v4" align="middle">
												NATURAL<br/>ARMOR
											</td>
											<td></td>
											<td class="v4" align="middle">
												MISC<br/>BONUS
											</td>
											<td class="v4" align="middle">
												MISS<br/>CHANCE
											</td>
											<td class="v4" align="middle">
												% SPELL<br/>FAILURE
											</td>
											<td class="v4" align="middle">
												ARMOR<br/>CHECK
											</td>
											<td class="v4" align="middle">
												MAX<br/>DEX
											</td>
											<td class="v4" align="middle">
												SPELL<br/>RESIST
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr>
							<td vAlign="top" colSpan="4">
								<table cellPadding="0" width="100%" border="0">
									<tbody>
										<tr vAlign="bottom">
											<td class="v4" align="middle" width="20%"></td>
											<td class="v4" vAlign="bottom" align="middle" width="10%">
												TOTAL
											</td>
											<td></td>
											<td class="v4" align="middle" width="9%">
												BASE<br/>SAVE
											</td>
											<td></td>
											<td class="v4" align="middle" width="9%">
												ABILITY<br/>MODIFIER
											</td>
											<td></td>
											<td class="v4" align="middle" width="9%">
												MAGIC<br/>MODIFIER
											</td>
											<td></td>
											<td class="v4" align="middle" width="9%">
												MISC<br/>MODIFIER
											</td>
											<td></td>
											<td class="v4" align="middle" width="9%">
												TEMPORARY<br/>MODIFIER
											</td>
											<td></td>
											<td class="v4" align="middle" width="25%">
												CONDITIONAL<br/>MODIFIERS
											</td>
										</tr>
										<tr>
											<td class="v9w" align="middle" bgColor="black">
												<b>FORTITUDE</b><br/>
												<span class="v5w">CON</span>
											</td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="Fortitude"/></b>
											</td>
											<td class="v7" align="middle"><b>=</b></td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="SavingThrows/SavingThrow[Name = 'Fortitude']/BaseSave"/></b>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="SavingThrows/SavingThrow[Name = 'Fortitude']/AbilityModifier"/></b>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="SavingThrows/SavingThrow[Name = 'Fortitude']/MagicSave"/></b>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="SavingThrows/SavingThrow[Name = 'Fortitude']/MiscSave"/></b>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td style="BORDER-RIGHT: #dddddd 3px solid; BORDER-TOP: #dddddd 3px solid; BORDER-LEFT: #dddddd 3px solid; BORDER-BOTTOM: #dddddd 3px solid" align="middle">
												&#160;
											</td>
											<td class="v7" vAlign="center" align="middle" rowSpan="3"><b>+</b></td>
											<td style="BORDER-RIGHT: #dddddd 3px solid; BORDER-TOP: #dddddd 3px solid; BORDER-LEFT: #dddddd 3px solid; BORDER-BOTTOM: #dddddd 3px solid" align="left" valign="top" rowSpan="3" class="v7">
												<xsl:for-each select="CoreModifiers/CoreModifier[Valid = 'True' and Enabled = 'True' and SystemElement = 'Saving Throw' and Condition != '']">
													<xsl:sort select="Condition"/>
													<xsl:if test="ModifierValue &gt; 0">+</xsl:if><xsl:value-of select="ModifierValue"/><xsl:text> </xsl:text><xsl:value-of select="Condition"/><br/>
												</xsl:for-each>
												<xsl:if test="$hasrage = 1">
													+<xsl:value-of select="($baseragestr div 2)"/> to Will saves while in a rage
												</xsl:if>
												<br/>
											</td>
										</tr>
										<tr>
											<td class="v9w" align="middle" bgColor="black">
												<b>REFLEX</b><br/>
												<span class="v5w">DEX</span>
											</td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="Reflex"/></b>
											</td>
											<td class="v7" align="middle"><b>=</b></td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="SavingThrows/SavingThrow[Name = 'Reflex']/BaseSave"/></b>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="SavingThrows/SavingThrow[Name = 'Reflex']/AbilityModifier"/></b>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="SavingThrows/SavingThrow[Name = 'Reflex']/MagicSave"/></b>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="SavingThrows/SavingThrow[Name = 'Reflex']/MiscSave"/></b>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td style="BORDER-RIGHT: #dddddd 3px solid; BORDER-TOP: #dddddd 3px solid; BORDER-LEFT: #dddddd 3px solid; BORDER-BOTTOM: #dddddd 3px solid" align="middle">
												&#160;
											</td>
										</tr>
										<tr>
											<td class="v9w" align="middle" bgColor="black">
												<b>WILL</b><br/>
												<span class="v5w">WIS</span>
											</td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="Will"/></b>
											</td>
											<td class="v7" align="middle"><b>=</b></td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="SavingThrows/SavingThrow[Name = 'Will']/BaseSave"/></b>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="SavingThrows/SavingThrow[Name = 'Will']/AbilityModifier"/></b>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="SavingThrows/SavingThrow[Name = 'Will']/MagicSave"/></b>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="SavingThrows/SavingThrow[Name = 'Will']/MiscSave"/></b>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td style="BORDER-RIGHT: #dddddd 3px solid; BORDER-TOP: #dddddd 3px solid; BORDER-LEFT: #dddddd 3px solid; BORDER-BOTTOM: #dddddd 3px solid" align="middle">
												&#160;
											</td>
										</tr>
									</tbody>
								</table>
							</td>
							<td vAlign="top" align="right">
								<table width="95%" border="0">
									<tbody>
										<tr>
											<td class="v9w" align="middle" width="40%" bgColor="black">
												<b>BASE ATTACK</b>
											</td>
										</tr>
										<tr>
											<td class="v9" align="middle" width="60%" bgColor="#dddddd">
												<b><xsl:value-of select="BAB1"/></b>
											</td>
										</tr>
									</tbody>
								</table>
								<table cellPadding="0" width="95%" border="0">
									<tbody>
										<tr>
											<td width="29%"></td>
											<td width="2%"></td>
											<td width="29%"></td>
											<td width="2%"></td>
											<td width="28%"></td>
										</tr>
										<tr>
											<td class="v9w" align="middle" bgColor="black" colSpan="5">
												<b>INITIATIVE</b><br/><span class="v5w">MODIFIER</span>
											</td>
										</tr>
										<tr>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="Initiative"/></b>
											</td>
											<td class="v7" align="middle">
												<b>=</b>
											</td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="translate(DEXMod, $removeplus, $replaceplus)"/></b>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="translate(Initiative, $removeplus, $replaceplus) - translate(DEXMod, $removeplus, $replaceplus)"/></b>
											</td>
										</tr>
										<tr>
											<td class="v4" vAlign="top" align="middle">
												TOTAL
											</td>
											<td></td>
											<td class="v4" vAlign="top" align="middle">
												DEX MOD
											</td>
											<td></td>
											<td class="v4" align="middle">
												MISC
											</td>
										</tr>
									</tbody>
								</table>
							</td>
							<td colSpan="2"></td>
						</tr>
						<tr>
							<td vAlign="top" colSpan="4">
								<table cellPadding="0" width="99%">
									<tbody>
										<tr>
											<td class="v10w" align="middle" bgColor="black">
												<b>GRAPPLE</b><br/>
												<span class="v5w">ATTACK BONUS</span>
											</td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="Grapple"/></b>
											</td>
											<td class="v7" align="middle"><b>=</b></td>
											<td class="v10" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="translate(BAB1, $removeplus, $replaceplus)"/></b>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td class="v10" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="translate(STRMod, $removeplus, $replaceplus)"/></b><br/>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td class="v10" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b>
												<xsl:choose>
													<xsl:when test="Size = 'Fine'">-16</xsl:when>
													<xsl:when test="Size = 'Diminutive'">-12</xsl:when>
													<xsl:when test="Size = 'Tiny'">-8</xsl:when>
													<xsl:when test="Size = 'Small'">-4</xsl:when>
													<xsl:when test="Size = 'Medium'">0</xsl:when>
													<xsl:when test="Size = 'Large'">4</xsl:when>
													<xsl:when test="Size = 'Huge'">8</xsl:when>
													<xsl:when test="Size = 'Gargantuan'">12</xsl:when>
													<xsl:when test="Size = 'Colossal'">16</xsl:when>
												</xsl:choose>
												</b><br/>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td class="v10" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b>
												<xsl:choose>
													<xsl:when test="Size = 'Fine'"><xsl:value-of select="translate(Grapple, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(STRMod, $removeplus, $replaceplus)- -16"/></xsl:when>
													<xsl:when test="Size = 'Diminutive'"><xsl:value-of select="translate(Grapple, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(STRMod, $removeplus, $replaceplus) - -12"/></xsl:when>
													<xsl:when test="Size = 'Tiny'"><xsl:value-of select="translate(Grapple, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(STRMod, $removeplus, $replaceplus) - -8"/></xsl:when>
													<xsl:when test="Size = 'Small'"><xsl:value-of select="translate(Grapple, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(STRMod, $removeplus, $replaceplus) - -4"/></xsl:when>
													<xsl:when test="Size = 'Medium'"><xsl:value-of select="translate(Grapple, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(STRMod, $removeplus, $replaceplus) - 0"/></xsl:when>
													<xsl:when test="Size = 'Large'"><xsl:value-of select="translate(Grapple, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(STRMod, $removeplus, $replaceplus) - 4"/></xsl:when>
													<xsl:when test="Size = 'Huge'"><xsl:value-of select="translate(Grapple, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(STRMod, $removeplus, $replaceplus) - 8"/></xsl:when>
													<xsl:when test="Size = 'Gargantuan'"><xsl:value-of select="translate(Grapple, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(STRMod, $removeplus, $replaceplus) - 12"/></xsl:when>
													<xsl:when test="Size = 'Colossal'"><xsl:value-of select="translate(Grapple, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(STRMod, $removeplus, $replaceplus) - 16"/></xsl:when>
												</xsl:choose>
												</b><br/>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td style="BORDER-RIGHT: #dddddd 3px solid; BORDER-TOP: #dddddd 3px solid; BORDER-LEFT: #dddddd 3px solid; BORDER-BOTTOM: #dddddd 3px solid" align="middle">
												<br/>
											</td>
										</tr>
										<tr>
											<td class="v10w" align="middle" bgColor="black">
												<b>MELEE</b><br/>
												<span class="v5w">ATTACK BONUS</span>
											</td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="Melee"/></b>
											</td>
											<td class="v7" align="middle"><b>=</b></td>
											<td class="v10" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="translate(BAB1, $removeplus, $replaceplus)"/></b>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td class="v10" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="translate(STRMod, $removeplus, $replaceplus)"/></b><br/>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td class="v10" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b>
												<xsl:choose>
													<xsl:when test="Size = 'Fine'">8</xsl:when>
													<xsl:when test="Size = 'Diminutive'">4</xsl:when>
													<xsl:when test="Size = 'Tiny'">2</xsl:when>
													<xsl:when test="Size = 'Small'">1</xsl:when>
													<xsl:when test="Size = 'Medium'">0</xsl:when>
													<xsl:when test="Size = 'Large'">-1</xsl:when>
													<xsl:when test="Size = 'Huge'">-2</xsl:when>
													<xsl:when test="Size = 'Gargantuan'">-4</xsl:when>
													<xsl:when test="Size = 'Colossal'">-8</xsl:when>
												</xsl:choose>
												</b><br/>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td class="v10" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b>
												<xsl:choose>
													<xsl:when test="Size = 'Fine'"><xsl:value-of select="translate(Melee, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(STRMod, $removeplus, $replaceplus) - 8"/></xsl:when>
													<xsl:when test="Size = 'Diminutive'"><xsl:value-of select="translate(Melee, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(STRMod, $removeplus, $replaceplus) - 4"/></xsl:when>
													<xsl:when test="Size = 'Tiny'"><xsl:value-of select="translate(Melee, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(STRMod, $removeplus, $replaceplus) - 2"/></xsl:when>
													<xsl:when test="Size = 'Small'"><xsl:value-of select="translate(Melee, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(STRMod, $removeplus, $replaceplus) - 1"/></xsl:when>
													<xsl:when test="Size = 'Medium'"><xsl:value-of select="translate(Melee, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(STRMod, $removeplus, $replaceplus) - 0"/></xsl:when>
													<xsl:when test="Size = 'Large'"><xsl:value-of select="translate(Melee, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(STRMod, $removeplus, $replaceplus) - -1"/></xsl:when>
													<xsl:when test="Size = 'Huge'"><xsl:value-of select="translate(Melee, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(STRMod, $removeplus, $replaceplus) - -28"/></xsl:when>
													<xsl:when test="Size = 'Gargantuan'"><xsl:value-of select="translate(Melee, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(STRMod, $removeplus, $replaceplus) - -4"/></xsl:when>
													<xsl:when test="Size = 'Colossal'"><xsl:value-of select="translate(Melee, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(STRMod, $removeplus, $replaceplus) - -8"/></xsl:when>
												</xsl:choose>
												</b><br/>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td style="BORDER-RIGHT: #dddddd 3px solid; BORDER-TOP: #dddddd 3px solid; BORDER-LEFT: #dddddd 3px solid; BORDER-BOTTOM: #dddddd 3px solid" align="middle">
												<br/>
											</td>
										</tr>
										<tr>
											<td class="v10w" align="middle" bgColor="black">
												<b>RANGED</b><br/>
												<span class="v5w">ATTACK BONUS</span>
											</td>
											<td class="v9" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="Ranged"/></b>
											</td>
											<td class="v7" align="middle"><b>=</b></td>
											<td class="v10" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="translate(BAB1, $removeplus, $replaceplus)"/></b><br/>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td class="v10" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b><xsl:value-of select="translate(DEXMod, $removeplus, $replaceplus)"/></b><br/>
											</td>
											<td class="v7" align="middle">
												<b>+</b>
											</td>
											<td class="v10" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b>
												<xsl:choose>
													<xsl:when test="Size = 'Fine'">8</xsl:when>
													<xsl:when test="Size = 'Diminutive'">4</xsl:when>
													<xsl:when test="Size = 'Tiny'">2</xsl:when>
													<xsl:when test="Size = 'Small'">1</xsl:when>
													<xsl:when test="Size = 'Medium'">0</xsl:when>
													<xsl:when test="Size = 'Large'">-1</xsl:when>
													<xsl:when test="Size = 'Huge'">-2</xsl:when>
													<xsl:when test="Size = 'Gargantuan'">-4</xsl:when>
													<xsl:when test="Size = 'Colossal'">-8</xsl:when>
												</xsl:choose>
												</b><br/>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td class="v10" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid" align="middle">
												<b>
												<xsl:choose>
													<xsl:when test="Size = 'Fine'"><xsl:value-of select="translate(Ranged, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(DEXMod, $removeplus, $replaceplus) - 8"/></xsl:when>
													<xsl:when test="Size = 'Diminutive'"><xsl:value-of select="translate(Ranged, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(DEXMod, $removeplus, $replaceplus) - 4"/></xsl:when>
													<xsl:when test="Size = 'Tiny'"><xsl:value-of select="translate(Ranged, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(DEXMod, $removeplus, $replaceplus) - 2"/></xsl:when>
													<xsl:when test="Size = 'Small'"><xsl:value-of select="translate(Ranged, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(DEXMod, $removeplus, $replaceplus) - 1"/></xsl:when>
													<xsl:when test="Size = 'Medium'"><xsl:value-of select="translate(Ranged, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(DEXMod, $removeplus, $replaceplus) - 0"/></xsl:when>
													<xsl:when test="Size = 'Large'"><xsl:value-of select="translate(Ranged, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(DEXMod, $removeplus, $replaceplus) - -1"/></xsl:when>
													<xsl:when test="Size = 'Huge'"><xsl:value-of select="translate(Ranged, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(DEXMod, $removeplus, $replaceplus) - -28"/></xsl:when>
													<xsl:when test="Size = 'Gargantuan'"><xsl:value-of select="translate(Ranged, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(DEXMod, $removeplus, $replaceplus) - -4"/></xsl:when>
													<xsl:when test="Size = 'Colossal'"><xsl:value-of select="translate(Ranged, $removeplus, $replaceplus) - translate(BAB1, $removeplus, $replaceplus) - translate(DEXMod, $removeplus, $replaceplus) - -8"/></xsl:when>
												</xsl:choose>
												</b><br/>
											</td>
											<td class="v7" align="middle"><b>+</b></td>
											<td style="BORDER-RIGHT: #dddddd 3px solid; BORDER-TOP: #dddddd 3px solid; BORDER-LEFT: #dddddd 3px solid; BORDER-BOTTOM: #dddddd 3px solid" align="middle">
												<br/>
											</td>
										</tr>
										<tr>
											<td width="16%"></td>
											<td class="v5" vAlign="top" align="middle" width="25%">
												TOTAL
											</td>
											<td width="1%"></td>
											<td class="v4" align="middle" width="6%">
												BASE<br/>ATTACK
											</td>
											<td width="1%"></td>
											<td class="v4" align="middle" width="6%">
												ABILITY<br/>MODIFIER
											</td>
											<td width="1%"></td>
											<td class="v4" align="middle" width="6%">
												SIZE<br/>MODIFIER
											</td>
											<td width="1%"></td>
											<td class="v4" align="middle" width="6%">
												MISC<br/>MODIFIER
											</td>
											<td width="1%"></td>
											<td class="v4" align="middle" width="8%">
												TEMP<br/>MODIFIER
											</td>
										</tr>
									</tbody>
								</table>
								<table cellSpacing="0" cellPadding="0" width="98%" border="0">
									<tbody>
										<tr>
											<td width="2%"></td>
											<td width="42%"></td>
											<td width="18%"></td>
											<td width="10%"></td>
											<td width="13%"></td>
										</tr>
										<tr>
											<td class="tableHeading" colSpan="2">
												<p class="tableHeadingText">Weapons
												<span class="tableColumnText">(DMG TYPE)</span></p>
											</td>
											<td class="tableHeading">
												<p class="tableColumnText">Attack<br/>
												Bonus</p>
											</td>
											<td class="tableHeading">
												<p class="tableColumnText">Damage</p>
											</td>
											<td class="tableHeading">
												<p class="tableColumnText">Critical</p>
											</td>
										</tr>
										
										<xsl:for-each select="Attacks/Attack">
											<xsl:for-each select="Primary">
											<tr>
												<td valign="top" class="weaponHand" rowSpan="1">
													I<xsl:if test="Wield = 'Two-Handed'"><span class="weaponTwoHanded">2</span></xsl:if>
													<xsl:if test="Wield = 'Thrown'"><span class="weaponThrown">R</span></xsl:if>
												</td>
												<td valign="top">
													<p class="itemName">
													<xsl:choose>
														<xsl:when test="FullName/text()[contains(., '+')]">
															<xsl:choose>
																<xsl:when test="BaseName/text()[contains(., '+')]">
																	<i><xsl:value-of select="BaseName"/></i>&#160;
																</xsl:when>
																<xsl:otherwise>
																	<i>+<xsl:value-of select="Enhancement"/>&#160;<xsl:value-of select="BaseName"/></i>&#160;
																</xsl:otherwise>
															</xsl:choose>
														</xsl:when>
														<xsl:otherwise>
															<xsl:value-of select="BaseName"/>&#160;
														</xsl:otherwise>
													</xsl:choose>
													<xsl:if test="AttackNumber">
														x<xsl:value-of select="AttackNumber"/>&#160;
													</xsl:if>
													<span class="itemNameDetail">
													<xsl:choose>
														<xsl:when test="BaseDamageType = 'Bludgeoning'">(B)</xsl:when>
														<xsl:when test="BaseDamageType = 'Piercing'">(P)</xsl:when>
														<xsl:when test="BaseDamageType = 'Slashing'">(S)</xsl:when>
														<xsl:otherwise>
															<xsl:choose>
																<xsl:when test="contains(BaseDamageType, 'Bludgeoning') and contains(BaseDamageType, 'Or') and contains(BaseDamageType, 'Piercing')">(B/P)</xsl:when>
																<xsl:when test="contains(BaseDamageType, 'Slashing') and contains(BaseDamageType, 'Or') and contains(BaseDamageType, 'Piercing')">(P/S)</xsl:when>
																<xsl:when test="contains(BaseDamageType, 'Bludgeoning') and contains(BaseDamageType, 'Or') and contains(BaseDamageType, 'Slashing')">(B/S)</xsl:when>
																<xsl:when test="contains(BaseDamageType, 'Bludgeoning') and contains(BaseDamageType, 'And') and contains(BaseDamageType, 'Piercing')">(B+P)</xsl:when>
																<xsl:when test="contains(BaseDamageType, 'Slashing') and contains(BaseDamageType, 'And') and contains(BaseDamageType, 'Piercing')">(P+S)</xsl:when>
																<xsl:when test="contains(BaseDamageType, 'Bludgeoning') and contains(BaseDamageType, 'And') and contains(BaseDamageType, 'Slashing')">(B+S)</xsl:when>
															</xsl:choose>
														</xsl:otherwise>
													</xsl:choose>
													<xsl:if test="PrimaryModifier">
														<br/>&#160;&#160;&#160;
														<xsl:for-each select="PrimaryModifier/ModifierName">
															<xsl:value-of select="."/>
															<xsl:if test="position() != last()">, </xsl:if>
														</xsl:for-each>
													</xsl:if>
													</span></p>
												</td>
												<td valign="top">
													<p class="itemDetail"><span class="bold"><xsl:value-of select="Attacks"/></span></p>
												</td>
												<td valign="top">
													<p class="itemDetail">
														<xsl:value-of select="BaseDamage"/>
														<xsl:for-each select="PrimaryExtraDamage/DamageName">
															<xsl:value-of select="."/>
														</xsl:for-each>
													</p>
												</td>
												<td valign="top">
													<p class="itemDetail">
														<xsl:if test="CriticalMultiplier">
															<xsl:if test="CriticalRange != '20-20'"><xsl:value-of select="CriticalRange"/>/</xsl:if>x<xsl:value-of select="CriticalMultiplier"/>
														</xsl:if>
													</p>
												</td>
											</tr>
											<xsl:if test="Range">
												<xsl:variable name="range" select="translate(Range, $removeft, $replaceft)"/>
												<xsl:variable name="bab" select="translate(substring(Attacks, 1, 3), $removebab, $replacebab)"/>
												<tr>
												<td></td>
												<td colspan="4">
													<table width="100%" cellspacing="0" cellpadding="0" border="0">
													<tr class="cellRangeIncHeading">
														<td>
														<p class="cellRangeIncHeadingText">
															0 – <xsl:value-of select="$range"/> ft
														</p>
														</td>
														<td>
														<p class="cellRangeIncHeadingText">
															<xsl:value-of select="$range + 1"/> – <xsl:value-of select="$range * 2"/> ft
														</p>
														</td>
														<td>
														<p class="cellRangeIncHeadingText">
															<xsl:value-of select="$range * 2 + 1"/> – <xsl:value-of select="$range * 3"/> ft
														</p>
														</td>
														<td>
														<p class="cellRangeIncHeadingText">
															<xsl:value-of select="$range * 3 + 1"/> – <xsl:value-of select="$range * 4"/> ft
														</p>
														</td>
														<td>
														<p class="cellRangeIncHeadingText">
															<xsl:value-of select="$range * 4 + 1"/> – <xsl:value-of select="$range * 5"/> ft
														</p>
														</td>
													</tr>
													<tr class="cellRangeIncTop">
														<td class="cellRangeIncTextHvy">
														<p>
															<xsl:value-of select="$bab"/>
															<xsl:if test="contains(PrimaryAbility/AbilityName, 'Speed')">/<xsl:value-of select="$bab"/></xsl:if>
															<xsl:if test="$natbab div 5 &gt; 1">/<xsl:value-of select="$bab - 5"/></xsl:if>
															<xsl:if test="$natbab div 10 &gt; 1">/<xsl:value-of select="$bab - 10"/></xsl:if>
															<xsl:if test="$natbab div 15 &gt; 1">/<xsl:value-of select="$bab - 15"/></xsl:if>
														</p>
														</td>
														<td class="cellRangeIncTextHvy">
														<p>
															<xsl:value-of select="$bab - 2"/>
															<xsl:if test="contains(PrimaryAbility/AbilityName, 'Speed')">/<xsl:value-of select="$bab - 2"/></xsl:if>
															<xsl:if test="$natbab div 5 &gt; 1">/<xsl:value-of select="$bab - 2 - 5"/></xsl:if>
															<xsl:if test="$natbab div 10 &gt; 1">/<xsl:value-of select="$bab - 2 - 10"/></xsl:if>
															<xsl:if test="$natbab div 15 &gt; 1">/<xsl:value-of select="$bab - 2 - 15"/></xsl:if>
														</p>
														</td>
														<td class="cellRangeIncTextHvy">
														<p>
															<xsl:value-of select="$bab - 4"/>
															<xsl:if test="contains(PrimaryAbility/AbilityName, 'Speed')">/<xsl:value-of select="$bab - 4"/></xsl:if>
															<xsl:if test="$natbab div 5 &gt; 1">/<xsl:value-of select="$bab - 4 - 5"/></xsl:if>
															<xsl:if test="$natbab div 10 &gt; 1">/<xsl:value-of select="$bab - 4 - 10"/></xsl:if>
															<xsl:if test="$natbab div 15 &gt; 1">/<xsl:value-of select="$bab - 4 - 15"/></xsl:if>
														</p>
														</td>
														<td class="cellRangeIncTextHvy">
														<p>
															<xsl:value-of select="$bab - 6"/>
															<xsl:if test="contains(PrimaryAbility/AbilityName, 'Speed')">/<xsl:value-of select="$bab - 6"/></xsl:if>
															<xsl:if test="$natbab div 5 &gt; 1">/<xsl:value-of select="$bab - 6 - 5"/></xsl:if>
															<xsl:if test="$natbab div 10 &gt; 1">/<xsl:value-of select="$bab - 6 - 10"/></xsl:if>
															<xsl:if test="$natbab div 15 &gt; 1">/<xsl:value-of select="$bab - 6 - 15"/></xsl:if>
														</p>
														</td>
														<td class="cellRangeIncTextHvy">
														<p>
															<xsl:value-of select="$bab - 8"/>
															<xsl:if test="contains(PrimaryAbility/AbilityName, 'Speed')">/<xsl:value-of select="$bab - 8"/></xsl:if>
															<xsl:if test="$natbab div 5 &gt; 1">/<xsl:value-of select="$bab - 8 - 5"/></xsl:if>
															<xsl:if test="$natbab div 10 &gt; 1">/<xsl:value-of select="$bab - 8 - 10"/></xsl:if>
															<xsl:if test="$natbab div 15 &gt; 1">/<xsl:value-of select="$bab - 8 - 15"/></xsl:if>
														</p>
														</td>
													</tr>
													<tr class="cellRangeIncHeading">
														<td>
														<p class="cellRangeIncHeadingText">
															<xsl:value-of select="$range * 5 + 1"/> – <xsl:value-of select="$range * 6"/> ft
														</p>
														</td>
														<td>
														<p class="cellRangeIncHeadingText">
															<xsl:value-of select="$range * 6 + 1"/> – <xsl:value-of select="$range * 7"/> ft
														</p>
														</td>
														<td>
														<p class="cellRangeIncHeadingText">
															<xsl:value-of select="$range * 7 + 1"/> – <xsl:value-of select="$range * 8"/> ft
														</p>
														</td>
														<td>
														<p class="cellRangeIncHeadingText">
															<xsl:value-of select="$range * 8 + 1"/> – <xsl:value-of select="$range * 9"/> ft
														</p>
														</td>
														<td>
														<p class="cellRangeIncHeadingText">
															<xsl:value-of select="$range * 9 + 1"/> – <xsl:value-of select="$range * 10"/> ft
														</p>
														</td>
													</tr>
													<tr class="cellRangeIncTop">
														<td class="cellRangeIncTextHvy">
														<p>
															<xsl:value-of select="$bab - 10"/>
															<xsl:if test="contains(PrimaryAbility/AbilityName, 'Speed')">/<xsl:value-of select="$bab - 10"/></xsl:if>
															<xsl:if test="$natbab div 5 &gt; 1">/<xsl:value-of select="$bab - 10 - 5"/></xsl:if>
															<xsl:if test="$natbab div 10 &gt; 1">/<xsl:value-of select="$bab - 10 - 10"/></xsl:if>
															<xsl:if test="$natbab div 15 &gt; 1">/<xsl:value-of select="$bab - 10 - 15"/></xsl:if>
														</p>
														</td>
														<td class="cellRangeIncTextHvy">
														<p>
															<xsl:value-of select="$bab - 12"/>
															<xsl:if test="contains(PrimaryAbility/AbilityName, 'Speed')">/<xsl:value-of select="$bab - 12"/></xsl:if>
															<xsl:if test="$natbab div 5 &gt; 1">/<xsl:value-of select="$bab - 12 - 5"/></xsl:if>
															<xsl:if test="$natbab div 10 &gt; 1">/<xsl:value-of select="$bab - 12 - 10"/></xsl:if>
															<xsl:if test="$natbab div 15 &gt; 1">/<xsl:value-of select="$bab - 12 - 15"/></xsl:if>
														</p>
														</td>
														<td class="cellRangeIncTextHvy">
														<p>
															<xsl:value-of select="$bab - 14"/>
															<xsl:if test="contains(PrimaryAbility/AbilityName, 'Speed')">/<xsl:value-of select="$bab - 14"/></xsl:if>
															<xsl:if test="$natbab div 5 &gt; 1">/<xsl:value-of select="$bab - 14 - 5"/></xsl:if>
															<xsl:if test="$natbab div 10 &gt; 1">/<xsl:value-of select="$bab - 14 - 10"/></xsl:if>
															<xsl:if test="$natbab div 15 &gt; 1">/<xsl:value-of select="$bab - 14 - 15"/></xsl:if>
														</p>
														</td>
														<td class="cellRangeIncTextHvy">
														<p>
															<xsl:value-of select="$bab - 16"/>
															<xsl:if test="contains(PrimaryAbility/AbilityName, 'Speed')">/<xsl:value-of select="$bab - 16"/></xsl:if>
															<xsl:if test="$natbab div 5 &gt; 1">/<xsl:value-of select="$bab - 16 - 5"/></xsl:if>
															<xsl:if test="$natbab div 10 &gt; 1">/<xsl:value-of select="$bab - 16 - 10"/></xsl:if>
															<xsl:if test="$natbab div 15 &gt; 1">/<xsl:value-of select="$bab - 16 - 15"/></xsl:if>
														</p>
														</td>
														<td class="cellRangeIncTextHvy">
														<p>
															<xsl:value-of select="$bab - 18"/>
															<xsl:if test="contains(PrimaryAbility/AbilityName, 'Speed')">/<xsl:value-of select="$bab - 18"/></xsl:if>
															<xsl:if test="$natbab div 5 &gt; 1">/<xsl:value-of select="$bab - 18 - 5"/></xsl:if>
															<xsl:if test="$natbab div 10 &gt; 1">/<xsl:value-of select="$bab - 18 - 10"/></xsl:if>
															<xsl:if test="$natbab div 15 &gt; 1">/<xsl:value-of select="$bab - 18 - 15"/></xsl:if>
														</p>
														</td>
													</tr>
													</table>
												</td>
												</tr>
											</xsl:if>
											</xsl:for-each>
											<xsl:for-each select="Secondary">
											<tr>
												<td valign="top" class="weaponHand" rowSpan="1">w</td>
												<td valign="top">
													<p class="itemName">
													<xsl:choose>
														<xsl:when test="FullName/text()[contains(., '+')]">
															<xsl:choose>
																<xsl:when test="BaseName/text()[contains(., '+')]">
																	<i><xsl:value-of select="BaseName"/></i>&#160;
																</xsl:when>
																<xsl:otherwise>
																	<i>+<xsl:value-of select="Enhancement"/>&#160;<xsl:value-of select="BaseName"/></i>&#160;
																</xsl:otherwise>
															</xsl:choose>
														</xsl:when>
														<xsl:otherwise>
															<xsl:value-of select="BaseName"/>&#160;
														</xsl:otherwise>
													</xsl:choose>
													<xsl:if test="AttackNumber">
														x<xsl:value-of select="AttackNumber"/>&#160;
													</xsl:if>
													<span class="itemNameDetail">
													<xsl:choose>
														<xsl:when test="BaseDamageType = 'Bludgeoning'">(B)</xsl:when>
														<xsl:when test="BaseDamageType = 'Piercing'">(P)</xsl:when>
														<xsl:when test="BaseDamageType = 'Slashing'">(S)</xsl:when>
														<xsl:otherwise>
															<xsl:choose>
																<xsl:when test="contains(BaseDamageType, 'Bludgeoning') and contains(BaseDamageType, 'Or') and contains(BaseDamageType, 'Piercing')">(B/P)</xsl:when>
																<xsl:when test="contains(BaseDamageType, 'Slashing') and contains(BaseDamageType, 'Or') and contains(BaseDamageType, 'Piercing')">(P/S)</xsl:when>
																<xsl:when test="contains(BaseDamageType, 'Bludgeoning') and contains(BaseDamageType, 'Or') and contains(BaseDamageType, 'Slashing')">(B/S)</xsl:when>
																<xsl:when test="contains(BaseDamageType, 'Bludgeoning') and contains(BaseDamageType, 'And') and contains(BaseDamageType, 'Piercing')">(B+P)</xsl:when>
																<xsl:when test="contains(BaseDamageType, 'Slashing') and contains(BaseDamageType, 'And') and contains(BaseDamageType, 'Piercing')">(P+S)</xsl:when>
																<xsl:when test="contains(BaseDamageType, 'Bludgeoning') and contains(BaseDamageType, 'And') and contains(BaseDamageType, 'Slashing')">(B+S)</xsl:when>
															</xsl:choose>
														</xsl:otherwise>
													</xsl:choose>
													<xsl:if test="SecondaryModifier">
														<br/>&#160;&#160;&#160;
														<xsl:for-each select="SecondaryModifier/ModifierName">
															<xsl:value-of select="."/>
															<xsl:if test="position() != last()">, </xsl:if>
														</xsl:for-each>
													</xsl:if>
													</span></p>
												</td>
												<td valign="top">
													<p class="itemDetail"><span class="bold"><xsl:value-of select="Attacks"/></span></p>
												</td>
												<td valign="top">
													<p class="itemDetail">
														<xsl:value-of select="BaseDamage"/>
														<xsl:for-each select="SecondaryExtraDamage/DamageName">
															<xsl:value-of select="."/>
														</xsl:for-each>
													</p>
												</td>
												<td valign="top">
													<xsl:if test="CriticalMultiplier">
														<p class="itemDetail"><xsl:value-of select="CriticalRange"/>/x<xsl:value-of select="CriticalMultiplier"/></p>
													</xsl:if>
												</td>
											</tr>
											<xsl:if test="Range">
												<xsl:variable name="range" select="translate(Range, $removeft, $replaceft)"/>
												<xsl:variable name="bab" select="translate(substring(Attacks, 1, 3), $removebab, $replacebab)"/>
												<tr>
												<td></td>
												<td colspan="4">
													<table width="100%" cellspacing="0" cellpadding="0" border="0">
													<tr class="cellRangeIncHeading">
														<td>
														<p class="cellRangeIncHeadingText">
															0 – <xsl:value-of select="$range"/> ft
														</p>
														</td>
														<td>
														<p class="cellRangeIncHeadingText">
															<xsl:value-of select="$range + 1"/> – <xsl:value-of select="$range * 2"/> ft
														</p>
														</td>
														<td>
														<p class="cellRangeIncHeadingText">
															<xsl:value-of select="$range * 2 + 1"/> – <xsl:value-of select="$range * 3"/> ft
														</p>
														</td>
														<td>
														<p class="cellRangeIncHeadingText">
															<xsl:value-of select="$range * 3 + 1"/> – <xsl:value-of select="$range * 4"/> ft
														</p>
														</td>
														<td>
														<p class="cellRangeIncHeadingText">
															<xsl:value-of select="$range * 4 + 1"/> – <xsl:value-of select="$range * 5"/> ft
														</p>
														</td>
													</tr>
													<tr class="cellRangeIncTop">
														<td class="cellRangeIncTextHvy">
														<p>
															<xsl:value-of select="$bab"/>
															<xsl:if test="contains(PrimaryAbility/AbilityName, 'Speed')">/<xsl:value-of select="$bab"/></xsl:if>
															<xsl:if test="$natbab div 5 &gt; 1">/<xsl:value-of select="$bab - 5"/></xsl:if>
															<xsl:if test="$natbab div 10 &gt; 1">/<xsl:value-of select="$bab - 10"/></xsl:if>
															<xsl:if test="$natbab div 15 &gt; 1">/<xsl:value-of select="$bab - 15"/></xsl:if>
														</p>
														</td>
														<td class="cellRangeIncTextHvy">
														<p>
															<xsl:value-of select="$bab - 2"/>
															<xsl:if test="contains(PrimaryAbility/AbilityName, 'Speed')">/<xsl:value-of select="$bab - 2"/></xsl:if>
															<xsl:if test="$natbab div 5 &gt; 1">/<xsl:value-of select="$bab - 2 - 5"/></xsl:if>
															<xsl:if test="$natbab div 10 &gt; 1">/<xsl:value-of select="$bab - 2 - 10"/></xsl:if>
															<xsl:if test="$natbab div 15 &gt; 1">/<xsl:value-of select="$bab - 2 - 15"/></xsl:if>
														</p>
														</td>
														<td class="cellRangeIncTextHvy">
														<p>
															<xsl:value-of select="$bab - 4"/>
															<xsl:if test="contains(PrimaryAbility/AbilityName, 'Speed')">/<xsl:value-of select="$bab - 4"/></xsl:if>
															<xsl:if test="$natbab div 5 &gt; 1">/<xsl:value-of select="$bab - 4 - 5"/></xsl:if>
															<xsl:if test="$natbab div 10 &gt; 1">/<xsl:value-of select="$bab - 4 - 10"/></xsl:if>
															<xsl:if test="$natbab div 15 &gt; 1">/<xsl:value-of select="$bab - 4 - 15"/></xsl:if>
														</p>
														</td>
														<td class="cellRangeIncTextHvy">
														<p>
															<xsl:value-of select="$bab - 6"/>
															<xsl:if test="contains(PrimaryAbility/AbilityName, 'Speed')">/<xsl:value-of select="$bab - 6"/></xsl:if>
															<xsl:if test="$natbab div 5 &gt; 1">/<xsl:value-of select="$bab - 6 - 5"/></xsl:if>
															<xsl:if test="$natbab div 10 &gt; 1">/<xsl:value-of select="$bab - 6 - 10"/></xsl:if>
															<xsl:if test="$natbab div 15 &gt; 1">/<xsl:value-of select="$bab - 6 - 15"/></xsl:if>
														</p>
														</td>
														<td class="cellRangeIncTextHvy">
														<p>
															<xsl:value-of select="$bab - 8"/>
															<xsl:if test="contains(PrimaryAbility/AbilityName, 'Speed')">/<xsl:value-of select="$bab - 8"/></xsl:if>
															<xsl:if test="$natbab div 5 &gt; 1">/<xsl:value-of select="$bab - 8 - 5"/></xsl:if>
															<xsl:if test="$natbab div 10 &gt; 1">/<xsl:value-of select="$bab - 8 - 10"/></xsl:if>
															<xsl:if test="$natbab div 15 &gt; 1">/<xsl:value-of select="$bab - 8 - 15"/></xsl:if>
														</p>
														</td>
													</tr>
													<tr class="cellRangeIncHeading">
														<td>
														<p class="cellRangeIncHeadingText">
															<xsl:value-of select="$range * 5 + 1"/> – <xsl:value-of select="$range * 6"/> ft
														</p>
														</td>
														<td>
														<p class="cellRangeIncHeadingText">
															<xsl:value-of select="$range * 6 + 1"/> – <xsl:value-of select="$range * 7"/> ft
														</p>
														</td>
														<td>
														<p class="cellRangeIncHeadingText">
															<xsl:value-of select="$range * 7 + 1"/> – <xsl:value-of select="$range * 8"/> ft
														</p>
														</td>
														<td>
														<p class="cellRangeIncHeadingText">
															<xsl:value-of select="$range * 8 + 1"/> – <xsl:value-of select="$range * 9"/> ft
														</p>
														</td>
														<td>
														<p class="cellRangeIncHeadingText">
															<xsl:value-of select="$range * 9 + 1"/> – <xsl:value-of select="$range * 10"/> ft
														</p>
														</td>
													</tr>
													<tr class="cellRangeIncTop">
														<td class="cellRangeIncTextHvy">
														<p>
															<xsl:value-of select="$bab - 10"/>
															<xsl:if test="contains(PrimaryAbility/AbilityName, 'Speed')">/<xsl:value-of select="$bab - 10"/></xsl:if>
															<xsl:if test="$natbab div 5 &gt; 1">/<xsl:value-of select="$bab - 10 - 5"/></xsl:if>
															<xsl:if test="$natbab div 10 &gt; 1">/<xsl:value-of select="$bab - 10 - 10"/></xsl:if>
															<xsl:if test="$natbab div 15 &gt; 1">/<xsl:value-of select="$bab - 10 - 15"/></xsl:if>
														</p>
														</td>
														<td class="cellRangeIncTextHvy">
														<p>
															<xsl:value-of select="$bab - 12"/>
															<xsl:if test="contains(PrimaryAbility/AbilityName, 'Speed')">/<xsl:value-of select="$bab - 12"/></xsl:if>
															<xsl:if test="$natbab div 5 &gt; 1">/<xsl:value-of select="$bab - 12 - 5"/></xsl:if>
															<xsl:if test="$natbab div 10 &gt; 1">/<xsl:value-of select="$bab - 12 - 10"/></xsl:if>
															<xsl:if test="$natbab div 15 &gt; 1">/<xsl:value-of select="$bab - 12 - 15"/></xsl:if>
														</p>
														</td>
														<td class="cellRangeIncTextHvy">
														<p>
															<xsl:value-of select="$bab - 14"/>
															<xsl:if test="contains(PrimaryAbility/AbilityName, 'Speed')">/<xsl:value-of select="$bab - 14"/></xsl:if>
															<xsl:if test="$natbab div 5 &gt; 1">/<xsl:value-of select="$bab - 14 - 5"/></xsl:if>
															<xsl:if test="$natbab div 10 &gt; 1">/<xsl:value-of select="$bab - 14 - 10"/></xsl:if>
															<xsl:if test="$natbab div 15 &gt; 1">/<xsl:value-of select="$bab - 14 - 15"/></xsl:if>
														</p>
														</td>
														<td class="cellRangeIncTextHvy">
														<p>
															<xsl:value-of select="$bab - 16"/>
															<xsl:if test="contains(PrimaryAbility/AbilityName, 'Speed')">/<xsl:value-of select="$bab - 16"/></xsl:if>
															<xsl:if test="$natbab div 5 &gt; 1">/<xsl:value-of select="$bab - 16 - 5"/></xsl:if>
															<xsl:if test="$natbab div 10 &gt; 1">/<xsl:value-of select="$bab - 16 - 10"/></xsl:if>
															<xsl:if test="$natbab div 15 &gt; 1">/<xsl:value-of select="$bab - 16 - 15"/></xsl:if>
														</p>
														</td>
														<td class="cellRangeIncTextHvy">
														<p>
															<xsl:value-of select="$bab - 18"/>
															<xsl:if test="contains(PrimaryAbility/AbilityName, 'Speed')">/<xsl:value-of select="$bab - 18"/></xsl:if>
															<xsl:if test="$natbab div 5 &gt; 1">/<xsl:value-of select="$bab - 18 - 5"/></xsl:if>
															<xsl:if test="$natbab div 10 &gt; 1">/<xsl:value-of select="$bab - 18 - 10"/></xsl:if>
															<xsl:if test="$natbab div 15 &gt; 1">/<xsl:value-of select="$bab - 18 - 15"/></xsl:if>
														</p>
														</td>
													</tr>
													</table>
												</td>
												</tr>
											</xsl:if>
											</xsl:for-each>
											<!-- Begin Rage --> 
											<xsl:if test="$hasrage = 1 and WeaponType != 'Ranged'">
												<xsl:variable name="bab" select="translate(substring(Attacks, 1, 3), $removebab, $replacebab)"/>
												<tr> 
													<td valign="top" class="weaponHand" rowSpan="1"> 
														I<xsl:if test="Wield = 'Two-Handed'"> 
															<span class="weaponTwoHanded">2</span> 
														</xsl:if> 
													</td> 
													<td valign="top"> 
														<p class="itemName"> 
															<xsl:choose> 
															<xsl:when test="FullName/text()[contains(., '+')]"> 
																<xsl:choose> 
																	<xsl:when test="BaseName/text()[contains(., '+')]">
																		<i>
																		<xsl:value-of select="BaseName"/>
																		</i>
																	</xsl:when>
																	<xsl:otherwise>
																		<i>
																		+<xsl:value-of select="Enhancement"/><xsl:text> </xsl:text><xsl:value-of select="BaseName"/>
																		</i>
																	</xsl:otherwise>
																</xsl:choose>
															</xsl:when>
															<xsl:otherwise>
																<xsl:value-of select="BaseName"/>
															</xsl:otherwise>
															</xsl:choose>
															<xsl:if test="AttackNumber">
																x<xsl:value-of select="AttackNumber"/>&#160;
															</xsl:if>
															[Raging]
															<span class="itemDetail">
															<xsl:choose>
																<xsl:when test="BaseDamageType = 'Bludgeoning'">(B)</xsl:when>
																<xsl:when test="BaseDamageType = 'Piercing'">(P)</xsl:when>
																<xsl:when test="BaseDamageType = 'Slashing'">(S)</xsl:when>
																<xsl:otherwise>
																	<xsl:choose>
																		<xsl:when test="contains(BaseDamageType, 'Bludgeoning') and contains(BaseDamageType, 'Or') and contains(BaseDamageType, 'Piercing')">(B/P)</xsl:when>
																		<xsl:when test="contains(BaseDamageType, 'Slashing') and contains(BaseDamageType, 'Or') and contains(BaseDamageType, 'Piercing')">(P/S)</xsl:when>
																		<xsl:when test="contains(BaseDamageType, 'Bludgeoning') and contains(BaseDamageType, 'Or') and contains(BaseDamageType, 'Slashing')">(B/S)</xsl:when>
																		<xsl:when test="contains(BaseDamageType, 'Bludgeoning') and contains(BaseDamageType, 'And') and contains(BaseDamageType, 'Piercing')">(B+P)</xsl:when>
																		<xsl:when test="contains(BaseDamageType, 'Slashing') and contains(BaseDamageType, 'And') and contains(BaseDamageType, 'Piercing')">(P+S)</xsl:when>
																		<xsl:when test="contains(BaseDamageType, 'Bludgeoning') and contains(BaseDamageType, 'And') and contains(BaseDamageType, 'Slashing')">(B+S)</xsl:when>
																	</xsl:choose>
																</xsl:otherwise>
															</xsl:choose>
															<xsl:if test="PrimaryModifier">
																<br/>&#160;&#160;&#160;
																<xsl:for-each select="PrimaryModifier/ModifierName">
																	<xsl:value-of select="."/>
																	<xsl:if test="position() != last()">, </xsl:if>
																</xsl:for-each>
															</xsl:if>
															</span>
														</p> 
													</td> 
													<td valign="top"> 
														<p class="itemDetail"> 
															<span class="bold"> 
															+<xsl:value-of select="$bab + ($ragestr div 2)" /> 
															<xsl:if test="$natbab div 5 &gt; 1">/+<xsl:value-of select="$bab - 5 + ($ragestr div 2)"/></xsl:if>
															<xsl:if test="$natbab div 10 &gt; 1">/+<xsl:value-of select="$bab - 10 + ($ragestr div 2)"/></xsl:if>
															<xsl:if test="$natbab div 15 &gt; 1">/+<xsl:value-of select="$bab - 15 + ($ragestr div 2)"/></xsl:if>
															</span> 
														</p> 
													</td> 
													<td valign="top"> 
														<p class="itemDetail"> 
															<xsl:value-of select="substring-before(BaseDamage, $removeplus)"/> 
															<xsl:text>+</xsl:text> 
															<xsl:value-of select="translate(substring-after(BaseDamage, $removeplus),' ','') + ($ragestr div 2)"/> 
															<xsl:for-each select="PrimaryExtraDamage/DamageName"> 
															<xsl:value-of select="."/> 
															</xsl:for-each> 
														</p> 
													</td> 
													<td valign="top"> 
														<p class="itemDetail">
															<xsl:if test="CriticalMultiplier">
																<xsl:if test="CriticalRange != '20-20'"> 
																<xsl:value-of select="CriticalRange"/>/ 
																</xsl:if>x<xsl:value-of select="CriticalMultiplier"/> 
															</xsl:if>
														</p> 
													</td> 
												</tr>
												<xsl:for-each select="Secondary">
													<tr> 
														<td valign="top" class="weaponHand" rowSpan="1">w</td> 
														<td valign="top"> 
															<p class="itemName"> 
															<xsl:choose> 
																<xsl:when test="FullName/text()[contains(., '+')]"> 
																	<xsl:choose> 
																		<xsl:when test="BaseName/text()[contains(., '+')]"> 
																		<i> 
																			<xsl:value-of select="BaseName"/> 
																		</i>  
																		</xsl:when> 
																		<xsl:otherwise> 
																		<i> 
																			+<xsl:value-of select="Enhancement"/><xsl:text> </xsl:text><xsl:value-of select="BaseName"/> 
																		</i>  
																		</xsl:otherwise> 
																	</xsl:choose> 
																</xsl:when> 
																<xsl:otherwise> 
																	<xsl:value-of select="BaseName"/>  
																</xsl:otherwise> 
															</xsl:choose>
															<xsl:if test="AttackNumber">
																x<xsl:value-of select="AttackNumber"/>&#160;
															</xsl:if>
															[Raging]  
															<span class="itemNameDetail"> 
																(S/P) 
															</span> 
															</p> 
														</td> 
														<td valign="top"> 
															<p class="itemDetail"> 
															<span class="bold"> 
																+<xsl:value-of select="translate(Attacks, $removeplus, '') + ($ragestr div 2)" /> 
															</span> 
															</p> 
														</td> 
														<td valign="top"> 
															<p class="itemDetail"> 
															<xsl:value-of select="substring-before(BaseDamage, $removeplus)"/> 
															<xsl:text>+</xsl:text> 
															<xsl:value-of select="translate(substring-after(BaseDamage, $removeplus),' ','') + ($ragestr div 2)"/> 
															<xsl:for-each select="SecondaryExtraDamage/DamageName"> 
																<xsl:value-of select="."/> 
															</xsl:for-each> 
															</p> 
														</td> 
														<td valign="top"> 
															<p class="itemDetail"> 
															<xsl:if test="CriticalMultiplier">
																<xsl:value-of select="CriticalRange"/>/x<xsl:value-of select="CriticalMultiplier"/> 
															</xsl:if>
															</p> 
														</td> 
													</tr> 
												</xsl:for-each> 
											</xsl:if>
											<!-- End Rage -->
											<tr>
												<td class="v1" colspan="5"><br/>
												</td>
											</tr>
											<tr>
												<td class="v1" style="BORDER-TOP: black 1px solid" colSpan="5"><br/>
												</td>
											</tr>
										</xsl:for-each>
										
										<tr>
											<td colSpan="5">
												<table cellSpacing="0" cellPadding="0" width="100%" align="center" border="0">
													<tbody>
														<tr>
															<td class="v6" align="middle"><span class="weaponHand">I</span>&#160;— Main hand 
																(Primary)</td>
															<td class="v6" align="middle"><span class="weaponHand">w</span>&#160;— Off hand 
																(Secondary)</td>
															<td class="v6" align="middle"><span class="weaponHand">I</span><span class="weaponTwoHanded">2</span>&#160;— 
																Two-handed</td>
															<td class="v6" align="middle"><span class="weaponHand"><span class="weaponThrown">R</span></span>&#160;— 
																Thrown</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
										<tr>
											<td class="v3"><br/>
											</td>
										</tr>
									</tbody>
								</table>
								
								<!-- Attack Mods -->
                                <xsl:if test="count(AttackModifiers/AttackModifier[Enabled = 'True' and Valid = 'True']) > 0">
                                    <table cellSpacing="0" cellPadding="0" width="98%" border="0">
                                        <tr>
                                            <td width="100%">
												<span class="v3">
													<br/>
												</span>
												<table border="0" cellpadding="0" cellspacing="0" width="100%">
													<tr>
														<td colspan="5" class="tableHeading">
															<p class="tableHeadingText">Attack Modifiers</p>
														</td>
													</tr>
													<xsl:for-each select="AttackModifiers/AttackModifier[Enabled = 'True' and Valid = 'True']">
														<tr>
															<td align="left" style="border-bottom: 1px solid black; width:100%" class="v7">
																<xsl:choose>
																	<xsl:when test="SystemElement = 'Attack Roll vs. Monster Type'">
																		<xsl:value-of select="substring-before(ModifierName, 'vs.')"/>
																		<xsl:value-of select="Condition"/>
																	</xsl:when>
																	<xsl:otherwise>
																		<xsl:value-of select="Source"/>
																		<xsl:text> (</xsl:text><xsl:value-of select="ModifierName"/><xsl:text> </xsl:text>
																		<xsl:value-of select="Condition"/>
																		<xsl:text>)</xsl:text>
																	</xsl:otherwise>
																</xsl:choose>
															</td>
														</tr>
													</xsl:for-each>
												</table>
                                            </td>
                                        </tr>
                                    </table>
                                </xsl:if>
                                <!-- End Attack Mods -->
								
								<table cellSpacing="0" cellPadding="0" width="98%" border="0">
									<tbody>
										<tr>
											<td>
												<!-- Armor -->
												<xsl:if test="Armor != 'Not wearing any armor'">
													<span class="v3">
														<br/>
													</span>
													<table cellSpacing="0" cellPadding="0" width="100%" border="0">
														<tbody>
															<tr>
																<td width="53%"></td>
																<td width="10%"></td>
																<td width="7%"></td>
																<td width="10%"></td>
																<td width="8%"></td>
																<td width="10%"></td>
															</tr>
															<tr>
																<td class="tableHeading">
																	<p class="tableHeadingText">Armor</p>
																</td>
																<td class="tableHeading">
																	<p class="tableColumnText">Armor<br/>
																		Bonus</p>
																</td>
																<td class="tableHeading">
																	<p class="tableColumnText">Max Dex</p>
																</td>
																<td class="tableHeading">
																	<p class="tableColumnText">Armor<br/>
																		Check</p>
																</td>
																<td class="tableHeading">
																	<p class="tableColumnText">Spell<br/>
																		Fail</p>
																</td>
																<td class="tableHeading">
																	<p class="tableColumnText">Max<br/>
																		Speed</p>
																</td>
															</tr>
															<tr>
																<td>
																	<p class="itemName">
																	<xsl:choose>
																		<xsl:when test="contains(substring-before(substring-after(Armor, '('), ')'), '+')">
																			<i><xsl:value-of select="substring-before(substring-after(Armor, '('), ')')"/></i>
																		</xsl:when>
																		<xsl:otherwise>
																			<xsl:value-of select="substring-before(substring-after(Armor, '('), ')')"/>
																		</xsl:otherwise>
																	</xsl:choose>
																	</p>
																</td>
																<td>
																	<p class="itemDetail"><xsl:value-of select="substring-before(Armor, ' ')"/></p>
																</td>
																<td>
																	<p class="itemDetail"><xsl:value-of select="ArmorMaxDex"/></p>
																</td>
																<td>
																	<p class="itemDetail"><xsl:choose><xsl:when test="ArmorCheckPenalty"><xsl:value-of select="ArmorCheckPenalty"/></xsl:when><xsl:otherwise>0</xsl:otherwise></xsl:choose></p>
																</td>
																<td>
																	<p class="itemDetail"><xsl:value-of select="SpellFailureArmor"/></p>
																</td>
																<td>
																	<p class="itemDetail"><xsl:value-of select="Speed"/></p>
																</td>
															</tr>
															<tr>
																<td class="v1"><br/>
																</td>
															</tr>
															<tr>
																<td class="v4" style="BORDER-TOP: black 1px solid" colSpan="6"><br/>
																</td>
															</tr>
														</tbody>
													</table>
												</xsl:if>
												<!-- End Armor -->
												
												<!-- Shield -->
												<xsl:if test="Shield != 'Not carrying a shield'">
													<table cellSpacing="0" cellPadding="0" width="100%" border="0">
														<tbody>
															<tr>
																<td width="52%"></td>
																<td width="10%"></td>
																<td width="10%"></td>
																<td width="10%"></td>
															</tr>
															<tr>
																<td class="tableHeading">
																	<p class="tableHeadingText">Shield</p>
																</td>
																<td class="tableHeading">
																	<p class="tableColumnText">Armor<br/>
																		Bonus</p>
																</td>
																<td class="tableHeading">
																	<p class="tableColumnText">Armor<br/>
																		Check</p>
																</td>
																<td class="tableHeading">
																	<p class="tableColumnText">Spell<br/>
																		Fail</p>
																</td>
															</tr>
															<tr>
																<td>
																	<p class="itemName">
																	<xsl:choose>
																		<xsl:when test="contains(substring-before(substring-after(Shield, '('), ')'), '+')">
																			<i><xsl:value-of select="substring-before(substring-after(Shield, '('), ')')"/></i>
																		</xsl:when>
																		<xsl:otherwise>
																			<xsl:value-of select="substring-before(substring-after(Shield, '('), ')')"/>
																		</xsl:otherwise>
																	</xsl:choose>
																	</p>
																</td>
																<td>
																	<p class="itemDetail"><xsl:value-of select="substring-before(Shield, ' ')"/></p>
																</td>
																<td>
																	<p class="itemDetail"><xsl:choose><xsl:when test="ShieldCheckPenalty"><xsl:value-of select="ShieldCheckPenalty"/></xsl:when><xsl:otherwise>0</xsl:otherwise></xsl:choose></p>
																</td>
																<td>
																	<p class="itemDetail"><xsl:value-of select="SpellFailureShield"/></p>
																</td>
															</tr>
															<tr>
																<td class="v1"><br/>
																</td>
															</tr>
															<tr>
																<td class="v1" style="BORDER-TOP: black 1px solid" colSpan="4"><br/>
																</td>
															</tr>
														</tbody>
													</table>
												</xsl:if>
												<!-- End Shield -->
												
												<!-- Defense Mods -->
												<xsl:if test="(count(DefenseModifiers/DefenseModifier[Enabled = 'True' and Valid = 'True']) >0) or (DR != '' and DR != 0) or (SR != '' and SR != 0) or (PR != '' and PR != 0)">
													<table cellSpacing="0" cellPadding="0" width="100%" border="0">
														<tr>
															<td width="100%">
																<span class="v3">
																<br/>
																</span>
																<table border="0" cellpadding="0" cellspacing="0" width="100%">
																	<tr>
																		<td colspan="4" class="tableHeading">
																			<p class="tableHeadingText">Defense Modifiers</p>
																		</td>
																	</tr>
																	<tr class="tableHeading">
																		<td width="25%"><p class="tableColumnText">Name</p></td>
																		<td width="25%"><p class="tableColumnText">Modifier</p></td>
																		<td width="15%"><p class="tableColumnText">Bonus</p></td>
																		<td width="35%"><p class="tableColumnText">Condition</p></td>
																	</tr>
																	<xsl:if test="DR != '' and DR != 0">
																		<tr>
																			<td align="left" style="border-bottom: 1px solid black; width:25%" class="v7" valign="top">
																				DR <xsl:value-of select="DR"/>
																			</td>
																			<td align="left" style="border-bottom: 1px solid black; width:25%" class="v7" valign="top">
																				<p class="itemDetail">-</p>
																			</td>
																			<td align="left" style="border-bottom: 1px solid black; width:15%" class="v7" valign="top">
																				<p class="itemDetail">-</p>
																			</td>
																			<td align="left" style="border-bottom: 1px solid black; width:35%" class="v7" valign="top">
																				<p class="itemDetail">-</p>
																			</td>
																		</tr>
																	</xsl:if>
																	<xsl:if test="SR != '' and SR != 0">
																		<tr>
																			<td align="left" style="border-bottom: 1px solid black; width:25%" class="v7" valign="top">
																				SR <xsl:value-of select="SR"/>
																			</td>
																			<td align="left" style="border-bottom: 1px solid black; width:25%" class="v7" valign="top">
																				<p class="itemDetail">-</p>
																			</td>
																			<td align="left" style="border-bottom: 1px solid black; width:15%" class="v7" valign="top">
																				<p class="itemDetail">-</p>
																			</td>
																			<td align="left" style="border-bottom: 1px solid black; width:35%" class="v7" valign="top">
																				<p class="itemDetail">-</p>
																			</td>
																		</tr>
																	</xsl:if>
																	<xsl:if test="PR != '' and PR != 0">
																		<tr>
																			<td align="left" style="border-bottom: 1px solid black; width:25%" class="v7" valign="top">
																				PR <xsl:value-of select="PR"/>
																			</td>
																			<td align="left" style="border-bottom: 1px solid black; width:25%" class="v7" valign="top">
																				<p class="itemDetail">-</p>
																			</td>
																			<td align="left" style="border-bottom: 1px solid black; width:15%" class="v7" valign="top">
																				<p class="itemDetail">-</p>
																			</td>
																			<td align="left" style="border-bottom: 1px solid black; width:35%" class="v7" valign="top">
																				<p class="itemDetail">-</p>
																			</td>
																		</tr>
																	</xsl:if>
																	<xsl:for-each select="Resistances/Resistance">
																		<tr>
																			<td align="left" style="border-bottom: 1px solid black; width:25%" class="v7" valign="top">
																				Resistance to <xsl:value-of select="ResistanceName"/>
																			</td>
																			<td align="left" style="border-bottom: 1px solid black; width:25%" class="v7" valign="top">
																				<p class="itemDetail">-</p>
																			</td>
																			<td align="left" style="border-bottom: 1px solid black; width:15%" class="v7" valign="top">
																				<p class="itemDetail">-</p>
																			</td>
																			<td align="left" style="border-bottom: 1px solid black; width:35%" class="v7" valign="top">
																				<p class="itemDetail">-</p>
																			</td>
																		</tr>
																	</xsl:for-each>
																	<xsl:for-each select="DefenseModifiers/DefenseModifier[Enabled = 'True' and Valid = 'True']">
																		<tr>
																			<td align="left" style="border-bottom: 1px solid black; width:25%" class="v7">
																				<xsl:value-of select="Source"/>
																			</td>
																			<td align="left" style="border-bottom: 1px solid black; width:25%" class="v7">
																				<p class="itemDetail"><xsl:value-of select="SystemElement"/></p>
																			</td>
																			<td align="left" style="border-bottom: 1px solid black; width:15%" class="v7">
																				<p class="itemDetail"><xsl:value-of select="ModifierType"/><xsl:text> + </xsl:text><xsl:value-of select="ModifierValue"/><br/></p>
																			</td>
																			<td align="left" style="border-bottom: 1px solid black; width:35%" class="v7">
																				<xsl:if test="Condition != ''">
																					<p class="itemDetail"><xsl:value-of select="Condition"/></p>
																				</xsl:if>
																				<xsl:if test="Condition = ''">
																					<p class="itemDetail">-</p>
																				</xsl:if>
																			</td>
																		</tr>
																	</xsl:for-each>
																</table>
															</td>
														</tr>
													</table>
												</xsl:if>
												<!-- End Defense Mods -->
												
												<!-- Turning -->
												<table cellSpacing="0" cellPadding="0" width="100%" border="0">
												<tr>
													<td style="width:100%;">
														<xsl:if test="$effclericlevel &gt; 0" >
														<span class="v3">
															<br/>
														</span>
														<table border="0" cellpadding="0" cellspacing="0" width="100%">
															<tr>
																<td width="8%"></td>
																<td width="8%"></td>
																<td width="9%"></td>
																<td width="9%"></td>
																<td width="11%"></td>
																<td width="11%"></td>
																<td width="11%"></td>
																<td width="11%"></td>
																<td width="11%"></td>
															</tr>
															<tr>
																<td colspan="5" class="tableHeading">
																	<p class="tableHeadingText">Turn or Rebuke Undead</p>
																</td>
																<td colspan="4" class="tableHeading">
																	<p class="tableColumnText">
																	Check Result / <br/>Maximum HD Affected
																	</p>
																</td>
															</tr>
															<tr>
																<td align="center" style="border-bottom: 1px solid black" class="v7">
																	<xsl:text>&lt;-0</xsl:text>
																</td>
																<td align="center" style="border-bottom: 1px solid black" class="v7">
																	<xsl:text>1-3</xsl:text>
																</td>
																<td align="center" style="border-bottom: 1px solid black" class="v7">
																	<xsl:text>4-6</xsl:text>
																</td>
																<td align="center" style="border-bottom: 1px solid black" class="v7">
																	<xsl:text>7-9</xsl:text>
																</td>
																<td align="center" style="border-bottom: 1px solid black" class="v7">
																	<xsl:text>10-12</xsl:text>
																</td>
																<td align="center" style="border-bottom: 1px solid black" class="v7">
																	<xsl:text>13-15</xsl:text>
																</td>
																<td align="center" style="border-bottom: 1px solid black" class="v7">
																	<xsl:text>16-18</xsl:text>
																</td>
																<td align="center" style="border-bottom: 1px solid black" class="v7">
																	<xsl:text>19-21</xsl:text>
																</td>
																<td align="center" style="border-bottom: 1px solid black" class="v7">
																	<xsl:text>22+</xsl:text>
																</td>
															</tr>
															<tr>
																<td align="center" class="v8">
																	<xsl:choose>
																	<xsl:when test="$effclericlevel - 4 &lt; 1">
																		<xsl:text disable-output-escaping="yes">&amp;#8212;</xsl:text>
																	</xsl:when>
																	<xsl:otherwise>
																		<xsl:value-of select="$effclericlevel - 4"/>
																	</xsl:otherwise>
																	</xsl:choose>
																</td>
																<td align="center" class="v8">
																	<xsl:choose>
																	<xsl:when test="$effclericlevel - 3 &lt; 1">
																		<xsl:text disable-output-escaping="yes">&amp;#8212;</xsl:text>
																	</xsl:when>
																	<xsl:otherwise>
																		<xsl:value-of select="$effclericlevel - 3"/>
																	</xsl:otherwise>
																	</xsl:choose>
																</td>
																<td align="center" class="v8">
																	<xsl:choose>
																	<xsl:when test="$effclericlevel - 2 &lt; 1">
																		<xsl:text disable-output-escaping="yes">&amp;#8212;</xsl:text>
																	</xsl:when>
																	<xsl:otherwise>
																		<xsl:value-of select="$effclericlevel - 2"/>
																	</xsl:otherwise>
																	</xsl:choose>
																</td>
																<td align="center" class="v8">
																	<xsl:choose>
																	<xsl:when test="$effclericlevel - 1 &lt; 1">
																		<xsl:text disable-output-escaping="yes">&amp;#8212;</xsl:text>
																	</xsl:when>
																	<xsl:otherwise>
																		<xsl:value-of select="$effclericlevel - 1"/>
																	</xsl:otherwise>
																	</xsl:choose>
																</td>
																<td align="center" class="v8">
																	<xsl:value-of select="$effclericlevel"/>
																</td>
																<td align="center" class="v8">
																	<xsl:value-of select="$effclericlevel + 1"/>
																</td>
																<td align="center" class="v8">
																	<xsl:value-of select="$effclericlevel + 2"/>
																</td>
																<td align="center" class="v8">
																	<xsl:value-of select="$effclericlevel + 3"/>
																</td>
																<td align="center" class="v8">
																	<xsl:value-of select="$effclericlevel + 4"/>
																</td>
															</tr>
															<tr bgcolor="#DDDDDD">
																<td colspan="2" class="tableSubHeadingTopRuled">
																	<p class="tableSubColumnText">Turns Per Day</p>
																</td>
																<td colspan="3" class="tableSubHeadingTopRuled">
																	<p class="tableSubColumnText">Turning Check</p>
																</td>
																<td colspan="2" class="tableSubHeadingTopRuled">
																	<p class="tableSubColumnText">Turning Damage</p>
																</td>
																<td colspan="2" class="tableSubHeadingTopRuled">
																	<p class="tableSubColumnText">Destroyed HD</p>
																</td>
															</tr>
															<tr>
																<td colspan="2" class="cellUnderline">
																	<p class="itemDetail">
																	<xsl:value-of select="$TotalTurnUndeadPerDay"/>
																	</p>
																</td>
																<td colspan="3" class="cellUnderline">
																	<p class="itemDetail">
																	<xsl:text>1d20</xsl:text>
																	<xsl:if test="$TotalTurningCheck &gt; -1">+</xsl:if>
																	<xsl:value-of select="$TotalTurningCheck"/>
																	</p>
																</td>
																<td colspan="2" class="cellUnderline">
																	<p class="itemDetail">
																	<xsl:value-of select="$turningdice"/><xsl:text>d6+</xsl:text>
																	<xsl:value-of select="$effclericlevel"/><xsl:text>+</xsl:text>
																	<xsl:value-of select="$turn-bonus"/>
																	</p>
																</td>
																<td colspan="2" class="cellUnderline">
																	<xsl:variable name="destroyed" select="floor( $effclericlevel div 2 )"/>
																	<p class="itemDetail">
																	<xsl:choose>
																		<xsl:when test="$destroyed = 0">
																			<xsl:value-of select="$one-half"/>
																		</xsl:when>
																		<xsl:otherwise>
																			<xsl:value-of select="$destroyed"/>
																		</xsl:otherwise>
																	</xsl:choose>
																	</p>
																</td>
															</tr>
														</table>
														</xsl:if>
													</td>
												</tr>
												</table>
												<!-- End Turning -->
												
												<!-- Rage -->
												<span class="v3">
													<br/>
												</span>
												<xsl:if test="$hasrage = 1">
													<table cellSpacing="0" cellPadding="0" width="100%" border="0">
														<tr class="tableHeader">
															<td colspan="5" class="tableHeading">
																<p class="tableHeadingText">Rage</p>
															</td>
														</tr>
														<tr bgcolor="#DDDDDD">
															<td class="tableSubHeadingTopRuled"><p class="tableSubColumnText">Rages/Day</p></td>
															<td class="tableSubHeadingTopRuled"><p class="tableSubColumnText">Duration</p></td>
															<td class="tableSubHeadingTopRuled"><p class="tableSubColumnText">Str/Con Bonus</p></td>
															<td class="tableSubHeadingTopRuled"><p class="tableSubColumnText">Will Save Bonus</p></td>
															<td class="tableSubHeadingTopRuled"><p class="tableSubColumnText">AC Penalty</p></td>
														</tr>
														<tr>
															<td class="writeinline" align="center"><p class="itemDetail"><xsl:value-of select="$rageday"/></p></td>
															<td class="writeinline" align="center"><p class="itemDetail"><xsl:value-of select="$ragelength"/> rounds</p></td>
															<td class="writeinline" align="center"><p class="itemDetail"><xsl:value-of select="$ragestr"/></p></td>
															<td class="writeinline" align="center"><p class="itemDetail"><xsl:value-of select="$baseragestr div 2"/></p></td>
															<td class="writeinline" align="center"><p class="itemDetail"><xsl:value-of select="$rageac"/></p></td>
														</tr>
													</table>
												</xsl:if>
												<!-- End Rage -->
                        
												<span class="v3">
													<br/>
												</span>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
							<td vAlign="top" colSpan="3">
								<table cellSpacing="0" cellPadding="0" width="100%" border="0">
									<tbody>
										<tr>
											<td width="1%"></td>
											<td width="51%"></td>
											<td width="7%"></td>
											<td width="1%"></td>
											<td width="6%"></td>
											<td width="1%"></td>
											<td width="6%"></td>
											<td width="1%"></td>
											<td width="6%"></td>
										</tr>
										<tr>
											<td align="middle" bgColor="black"></td>
											<td class="v10w" align="left" bgColor="black"><b>SKILLS</b></td>
											<td class="v7w" vAlign="top" align="right" bgColor="black" colSpan="7">
												<b><span style="MARGIN-RIGHT: 2px">MAX RANKS <xsl:value-of select="sum(Classes/Class/ClassLevel) + 3"/>/<xsl:value-of select="(sum(Classes/Class/ClassLevel) + 3) div 2"/></span></b>
											</td>
										</tr>
										<tr>
											<td class="v6w" align="middle" bgColor="black"><br/>
											</td>
											<td class="v6w" vAlign="bottom" align="left" bgColor="black"><b>NAME (KEY ABILITY)</b></td>
											<td class="v6w" vAlign="bottom" align="right" bgColor="black"><b>TOT</b></td>
											<td class="v6w" bgColor="black"><br/>
											</td>
											<td class="v6w" vAlign="bottom" align="middle" bgColor="black"><b>RNK</b></td>
											<td class="v6w" bgColor="black"><br/>
											</td>
											<td class="v6w" vAlign="bottom" align="middle" bgColor="black"><b>ABL</b></td>
											<td class="v6w" bgColor="black"><br/>
											</td>
											<td class="v6w" vAlign="bottom" align="middle" bgColor="black"><b>MSC</b></td>
										</tr>
										
										<xsl:for-each select="Skills/Skill[TrainedOnly = 'False' or SkillRanks &gt; 0]">
											<xsl:sort select="SkillName"/>
											  <tr>
												  <xsl:if test="position() mod 2 = 0">
													  <xsl:attribute name="bgcolor">#DDDDDD</xsl:attribute>
												  </xsl:if>
												  <td class="v7" align="middle">
													  <xsl:if test="TrainedOnly = 'False'">
													  <span class="symbol8">w</span><br/>
													  </xsl:if>
												  </td>
												  <td class="v7" align="left"><a target="skill"><xsl:attribute name="href"><xsl:value-of select="HelpPage"/></xsl:attribute><xsl:value-of select="SkillName"/></a><i> (<xsl:value-of select="Ability"/>)</i><xsl:if test="CheckMultiplier = '1'">*</xsl:if><xsl:if test="CheckMultiplier = '2'">**</xsl:if></td>
												  <td class="v7" vAlign="bottom" align="right"><b><xsl:if test="Final != 'X'"><xsl:value-of select="translate(Final, $removeplus, $replaceplus)"/></xsl:if></b>&#160;</td>
												  <td class="v7" vAlign="bottom" align="middle"><b>=</b></td>
												  <td class="v7" align="middle"><xsl:choose><xsl:when test="SkillRanks != 0"><xsl:value-of select="SkillRanks"/></xsl:when><xsl:otherwise>&#160;</xsl:otherwise></xsl:choose></td>
												  <td class="v7" vAlign="bottom" align="middle">+</td>
												  <td class="v7" align="middle">
													  <xsl:choose>
														  <xsl:when test="Ability = 'STR'"><xsl:value-of select="translate(../../STRMod, $removeplus, $replaceplus)"/></xsl:when>
														  <xsl:when test="Ability = 'DEX'"><xsl:value-of select="translate(../../DEXMod, $removeplus, $replaceplus)"/></xsl:when>
														  <xsl:when test="Ability = 'CON'"><xsl:value-of select="translate(../../CONMod, $removeplus, $replaceplus)"/></xsl:when>
														  <xsl:when test="Ability = 'INT'"><xsl:value-of select="translate(../../INTMod, $removeplus, $replaceplus)"/></xsl:when>
														  <xsl:when test="Ability = 'WIS'"><xsl:value-of select="translate(../../WISMod, $removeplus, $replaceplus)"/></xsl:when>
														  <xsl:when test="Ability = 'CHA'"><xsl:value-of select="translate(../../CHAMod, $removeplus, $replaceplus)"/></xsl:when>
													  </xsl:choose>
												  </td>
												  <td class="v7" vAlign="bottom" align="middle">+</td>
												  <td class="v7" align="middle">
                            <xsl:choose>
                              <xsl:when test="Ability = 'STR'">
                                <xsl:value-of select="Modifier - translate(../../STRMod, $removeplus, $replaceplus)"/>
                              </xsl:when>
                              <xsl:when test="Ability = 'DEX'">
                                <xsl:value-of select="Modifier - translate(../../DEXMod, $removeplus, $replaceplus)"/>
                              </xsl:when>
                              <xsl:when test="Ability = 'CON'">
                                <xsl:value-of select="Modifier - translate(../../CONMod, $removeplus, $replaceplus)"/>
                              </xsl:when>
                              <xsl:when test="Ability = 'INT'">
                                <xsl:value-of select="Modifier - translate(../../INTMod, $removeplus, $replaceplus)"/>
                              </xsl:when>
                              <xsl:when test="Ability = 'WIS'">
                                <xsl:value-of select="Modifier - translate(../../WISMod, $removeplus, $replaceplus)"/>
                              </xsl:when>
                              <xsl:when test="Ability = 'CHA'">
                                <xsl:value-of select="Modifier - translate(../../CHAMod, $removeplus, $replaceplus)"/>
                              </xsl:when>
                            </xsl:choose>
                          </td>
											  </tr>
										</xsl:for-each><br/>
										<tr>
											<td class="v3"><br/>
											</td>
										</tr>
										<tr>
											<td></td>
											<td align="middle" colSpan="9">
												<table cellSpacing="0" cellPadding="0" width="100%" border="0">
													<tbody>
														<tr>
															<td class="v6"><span class="symbol8">w</span>
																Can be used untrained
															</td>
															<td class="v6">* Armor Check penalty</td>
															<td class="v6">** Armor Check ×2</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
								
								<!-- Skill Mods -->
								<xsl:if test="count(SkillModifiers/SkillModifier[Enabled = 'True' and Valid = 'True' and Condition != '']) >0">
									<table cellSpacing="0" cellPadding="0" width="100%" border="0">
										<tr>
											<td width="100%">
												<span class="v3">
												<br/>
												</span>
												<table border="0" cellpadding="0" cellspacing="0" width="100%">
													<tr>
														<td colspan="5" class="tableHeading">
															<p class="tableHeadingText">Skill Modifiers</p>
														</td>
													</tr>
													<xsl:for-each select="SkillModifiers/SkillModifier[Enabled = 'True' and Valid = 'True' and Condition != '']">
														<tr>
															<td align="left" style="border-bottom: 1px solid black; width:100%" class="v7">
																<xsl:value-of select="Source"/>
																	<xsl:text> (</xsl:text><xsl:value-of select="ModifierName"/><xsl:text> </xsl:text>
																	<xsl:value-of select="Condition"/>
																	<xsl:text>)</xsl:text>
															</td>
														</tr>
													</xsl:for-each>
												</table>
											</td>
										</tr>
									</table>
								</xsl:if>
								<!-- End Defense Mods -->
								
							</td>
						</tr>
					</tbody></table>
				<br style="PAGE-BREAK-AFTER: always"/>
				<xsl:if test="Assets/AssetItem">
					<table cellSpacing="0" cellPadding="0" width="100%" bgColor="white" border="0">
						<tbody>
							<tr>
								<td width="1%"></td>
								<td width="26%"></td>
								<td width="5%"></td>
								<td width="7%"></td>
								<td width="3%"></td>
								<td width="7%"></td>
								<td width="1%"></td>
								<td width="26%"></td>
								<td width="5%"></td>
								<td width="7%"></td>
								<td width="3%"></td>
								<td width="7%"></td>
							</tr>
							<tr>
								<td class="tableHeading" colspan="2">
									<p class="tableHeadingText">Assets
										<span class="tableColumnText">Description</span></p>
								</td>
								<td class="tableHeading">
									<p class="tableColumnText">Charges</p>
								</td>
								<td class="tableHeading">
									<p class="tableColumnText">Value<br/>
										Each</p>
								</td>
								<td class="tableHeading">
									<p class="tableColumnText">Qty</p>
								</td>
								<td class="tableHeading" style="BORDER-RIGHT: white 1px solid">
									<p class="tableColumnText">Lbs</p>
								</td>
								<td class="tableHeading" colspan="2">
									<p class="tableHeadingText">Assets
										<span class="tableColumnText">Description</span></p>
								</td>
								<td class="tableHeading">
									<p class="tableColumnText">Charges</p>
								</td>
								<td class="tableHeading">
									<p class="tableColumnText">Value<br/>
										Each</p>
								</td>
								<td class="tableHeading">
									<p class="tableColumnText">Qty</p>
								</td>
								<td class="tableHeading">
									<p class="tableColumnText">Lbs</p>
								</td>
							</tr>
							<xsl:call-template name="assets"/>
						</tbody>
					</table><br/>
				</xsl:if>
				
				<table cellSpacing="0" cellPadding="0" width="100%" bgColor="white" border="0">
					<tbody>
						<tr>
							<td width="1%"></td>
							<td width="26%"></td>
							<td width="5%"></td>
							<td width="7%"></td>
							<td width="3%"></td>
							<td width="7%"></td>
							<td width="1%"></td>
							<td width="26%"></td>
							<td width="5%"></td>
							<td width="7%"></td>
							<td width="3%"></td>
							<td width="7%"></td>
						</tr>
						<tr>
							<td class="tableHeading" colspan="2">
								<p class="tableHeadingText">Equipment
									<span class="tableColumnText">Description</span></p>
							</td>
							<td class="tableHeading">
								<p class="tableColumnText">Charges</p>
							</td>
							<td class="tableHeading">
								<p class="tableColumnText">Value<br/>
									Each</p>
							</td>
							<td class="tableHeading">
								<p class="tableColumnText">Qty</p>
							</td>
							<td class="tableHeading" style="BORDER-RIGHT: white 1px solid">
								<p class="tableColumnText">Lbs</p>
							</td>
							<td class="tableHeading" colspan="2">
								<p class="tableHeadingText">Equipment
									<span class="tableColumnText">Description</span></p>
							</td>
							<td class="tableHeading">
								<p class="tableColumnText">Charges</p>
							</td>
							<td class="tableHeading">
								<p class="tableColumnText">Value<br/>
									Each</p>
							</td>
							<td class="tableHeading">
								<p class="tableColumnText">Qty</p>
							</td>
							<td class="tableHeading">
								<p class="tableColumnText">Lbs</p>
							</td>
						</tr>
						<xsl:for-each select="Inventory/InventoryItem/ContainerKey[not(.=preceding::ContainerKey)]">
							<xsl:sort select="../ContainerName"/>
							<xsl:call-template name="equipment"><xsl:with-param name="container" select="."/><xsl:with-param name="name" select="../ContainerName"/></xsl:call-template>
						</xsl:for-each>
						<xsl:call-template name="emptyinventory"><xsl:with-param name="count" select="$BlankInventoryLines"/></xsl:call-template>
					</tbody>
				</table>
				<table cellSpacing="0" cellPadding="0" width="100%" bgColor="white" border="0">
					<tbody>
						<tr>
							<td colSpan="5">
								<table cellSpacing="0" cellPadding="0" width="100%" bgColor="white" border="0">
									<tbody>
										<tr>
											<td width="24%"></td>
											<td width="15%"></td>
											<td width="15%"></td>
											<td width="16%"></td>
											<td width="10%"></td>
											<td width="10%"></td>
											<td width="10%"></td>
										</tr>
										<tr>
											<td class="v2"><br/>
											</td>
										</tr>
										<tr>
											<td style="BORDER-RIGHT: black 1px dashed" rowSpan="2">
												<p class="loadText">Carried Weight</p>
												<p class="loadTotalCarried"><xsl:value-of select="InventoryWeight"/></p>
											</td>
											<td align="middle">
												<p class="tableBodyText"><xsl:value-of select="LightLoadInfo"/></p>
											</td>
											<td align="middle">
												<p class="tableBodyText"><xsl:value-of select="MediumLoadInfo"/></p>
											</td>
											<td style="BORDER-RIGHT: black 1px dashed" align="middle">
												<p class="tableBodyText"><xsl:value-of select="HeavyLoadInfo"/></p>
											</td>
											<td align="middle">
												<p class="tableBodyText"><xsl:value-of select="$heavy"/> lb.</p>
											</td>
											<td align="middle">
												<p class="tableBodyText"><xsl:value-of select="$heavy * 2"/> lb.</p>
											</td>
											<td align="middle">
												<p class="tableBodyText"><xsl:value-of select="$heavy * 5"/> lb.</p>
											</td>
										</tr>
										<tr>
											<xsl:choose>
												<xsl:when test="CurrentLoad = 'Light'">
													<td bgColor="#dddddd">
														<p class="loadText"><span class="bold">Light</span></p>
													</td>
												</xsl:when>
												<xsl:otherwise>
													<td>
														<p class="loadText">Light</p>
													</td>
												</xsl:otherwise>
											</xsl:choose>
											<xsl:choose>
												<xsl:when test="CurrentLoad = 'Medium'">
													<td bgColor="#dddddd">
														<p class="loadText"><span class="bold">Medium</span></p>
													</td>
												</xsl:when>
												<xsl:otherwise>
													<td>
														<p class="loadText">Medium</p>
													</td>
												</xsl:otherwise>
											</xsl:choose>
											<xsl:choose>
												<xsl:when test="CurrentLoad = 'Heavy'">
													<td bgColor="#dddddd">
														<p class="loadText"><span class="bold">Heavy</span></p>
													</td>
												</xsl:when>
												<xsl:otherwise>
													<td>
														<p class="loadText">Heavy</p>
													</td>
												</xsl:otherwise>
											</xsl:choose>
											<td>
												<p class="loadText">Over<br/>
													Head</p>
											</td>
											<td>
												<p class="loadText">Off<br/>
													Grnd</p>
											</td>
											<td>
												<p class="loadText">Push<br/>
													Drag</p>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
				<table cellSpacing="0" cellPadding="0" width="100%" border="0">
					<tbody>
						<tr>
							<td class="v2"><br/>
							</td>
						</tr>
						<tr>
							<td vAlign="top" width="60%"><span class="v3"><br/>
								</span>
								<table cellSpacing="0" cellPadding="0" width="100%" border="0">
									<tbody>
										<tr>
											<td width="16%"></td>
											<td width="14%"></td>
											<td width="14%"></td>
											<td width="14%"></td>
											<td width="14%"></td>
											<td width="14%"></td>
											<td width="14%"></td>
										</tr>
										<tr>
											<td class="tableHeading">
												<p class="tableHeadingText">Feats</p>
											</td>
											<td class="tableHeading">
												<p class="tableColumnText">Armor<br/>
													Light</p>
											</td>
											<td class="tableHeading">
												<p class="tableColumnText">Armor<br/>
													Medium</p>
											</td>
											<td class="tableHeading">
												<p class="tableColumnText">Armor<br/>
													Heavy</p>
											</td>
											<td class="tableHeading">
												<p class="tableColumnText">Weapon<br/>
													Simple</p>
											</td>
											<td class="tableHeading">
												<p class="tableColumnText">Weapon<br/>
													Martial</p>
											</td>
											<td class="tableHeading">
												<p class="tableColumnText">Shield</p>
											</td>
										</tr>
										<tr>
											<td class="cellUnderline">
												<p class="v9"><br/>
												</p>
											</td>
											<td class="cellUnderline">
												<p class="itemDetail">
												<xsl:choose>
													<xsl:when test="Feats/Feat[FeatName = 'Armor Proficiency (Light)']">Proficient</xsl:when>
													<xsl:otherwise>Untrained</xsl:otherwise>
												</xsl:choose>
												</p>
											</td>
											<td class="cellUnderline">
												<p class="itemDetail">
												<xsl:choose>
													<xsl:when test="Feats/Feat[FeatName = 'Armor Proficiency (Medium)']">Proficient</xsl:when>
													<xsl:otherwise>Untrained</xsl:otherwise>
												</xsl:choose>
												</p>
											</td>
											<td class="cellUnderline">
												<p class="itemDetail">
												<xsl:choose>
													<xsl:when test="Feats/Feat[FeatName = 'Armor Proficiency (Heavy)']">Proficient</xsl:when>
													<xsl:otherwise>Untrained</xsl:otherwise>
												</xsl:choose>
												</p>
											</td>
											<td class="cellUnderline">
												<p class="itemDetail">
												<xsl:choose>
													<xsl:when test="Feats/Feat[FeatName = 'Simple Weapons Proficiency']">Proficient</xsl:when>
													<xsl:otherwise>
														<xsl:choose>
															<xsl:when test="Feats/Feat[FeatName = 'Simple Weapon Proficiency']">Select</xsl:when>
															<xsl:otherwise>Untrained</xsl:otherwise>
														</xsl:choose>
													</xsl:otherwise>
												</xsl:choose>
												</p>
											</td>
											<td class="cellUnderline">
												<p class="itemDetail">
												<xsl:choose>
													<xsl:when test="Features/Feature[FeatureName = 'Martial Weapons Proficiency']">Proficient</xsl:when>
													<xsl:otherwise>
														<xsl:choose>
															<xsl:when test="Feats/Feat[FeatName = 'Martial Weapon Proficiency']">Select</xsl:when>
															<xsl:otherwise>Untrained</xsl:otherwise>
														</xsl:choose>
													</xsl:otherwise>
												</xsl:choose>
												</p>
											</td>
											<td class="cellUnderline">
												<p class="itemDetail">
												<xsl:choose>
													<xsl:when test="Feats/Feat[FeatName = 'Tower Shield Proficiency']">Proficient + Tower</xsl:when>
													<xsl:otherwise>
														<xsl:choose>
															<xsl:when test="Feats/Feat[FeatName = 'Shield Proficiency']">Proficient</xsl:when>
															<xsl:otherwise>Untrained</xsl:otherwise>
														</xsl:choose>
													</xsl:otherwise>
												</xsl:choose>
												</p>
											</td>
										</tr>
										
										<xsl:for-each select="Feats/Feat[Disabled != 'True']">
											<xsl:sort select="FeatName"/>
											<tr>
												<td class="cellUnderline" colSpan="7">
													<p class="featText"><span class="bold"><a target="feat"><xsl:attribute name="href"><xsl:value-of select="HelpPage"/></xsl:attribute><xsl:value-of select="FeatName"/></a></span>
														<xsl:text> </xsl:text><xsl:value-of select="FocusName"/>
														<xsl:if test="Description != ''">
															<xsl:text> - </xsl:text>
															<xsl:value-of select="Description"/>
														</xsl:if>
														<xsl:if test="Sourcebook or PageNo">
															(<xsl:value-of select="Sourcebook"/>&#160;<xsl:value-of select="PageNo"/>).
														</xsl:if>
													</p>
												</td>
											</tr>
										</xsl:for-each>
									</tbody>
								</table>
								<span class="v3">
									<br/>
								</span>
								<table cellSpacing="0" cellPadding="0" width="100%" border="0">
									<tbody>
										<tr>
											<td width="75%"></td>
											<td width="25%"></td>
										</tr>
										<tr>
											<td class="tableHeading">
												<p class="tableHeadingText">Protective Items</p>
											</td>
											<td class="tableHeading">
												<p class="tableColumnText">Bonuses<br/>
													Provided</p>
											</td>
										</tr>
										<xsl:for-each select="DefenseModifiers/DefenseModifier[Enabled = 'True' and Valid = 'True']">
											<tr>
												<td class="cellUnderline">
													<p class="itemName"><xsl:value-of select="Source"/></p>
												</td>
												<td class="cellUnderline">
													<p class="itemDetail"><xsl:value-of select="ModifierType"/><xsl:text> + </xsl:text><xsl:value-of select="ModifierValue"/><br/>
													</p>
												</td>
											</tr>
										</xsl:for-each>
									</tbody>
								</table>
								<span class="v3">
									<br/>
								</span>
							</td>
							<td width="1%"><br/>
							</td>
							<td vAlign="top" width="39%"><span class="v3"><br/>
								</span>
								<table cellSpacing="0" cellPadding="0" width="100%" border="0">
									<tbody>
										<tr>
											<td class="tableHeading">
												<p class="tableHeadingText">Character Features</p>
											</td>
										</tr>
										<xsl:for-each select="Features/Feature[(Disabled = 'False' or not(Disabled)) and SourceFlag = 'Class']/SourceName[not(.=preceding::SourceName)]">
											<xsl:sort select="."/>
											<xsl:call-template name="classfeatures"><xsl:with-param name="class" select="."/></xsl:call-template>
										</xsl:for-each>
									</tbody>
								</table>
								<xsl:if test="Features/Feature[Disabled = 'False' and SourceFlag = 'Race']">
								<table cellSpacing="0" cellPadding="0" width="100%" border="0">
									<tbody></tbody>
								</table>
								<table cellSpacing="0" cellPadding="0" width="100%" border="0">
									<tbody>
										<tr>
											<td class="tableSubHeading" colSpan="2">
												<p class="classFeatureHead">Racial</p>
											</td>
										</tr>
										<xsl:for-each select="Features/Feature[Disabled = 'False' and SourceFlag = 'Race']">
											<xsl:sort select="SourceFlag"/>
											<xsl:sort select="SourceName"/>
											<tr>
												<td class="cellUnderline">
													<p class="classFeatureText"><a target="feature"><xsl:attribute name="href"><xsl:value-of select="HelpPage"/></xsl:attribute><xsl:value-of select="FeatureName"/></a><xsl:text> - </xsl:text><xsl:value-of select="Description"/></p>
												</td>
											</tr>
										</xsl:for-each>
									</tbody>
								</table>
								</xsl:if>
								<xsl:if test="Features/Feature[Disabled = 'False' and SourceFlag = 'Domain']">
								<table cellSpacing="0" cellPadding="0" width="100%" border="0">
									<tbody></tbody>
								</table>
								<table cellSpacing="0" cellPadding="0" width="100%" border="0">
									<tbody>
										<tr>
											<td class="tableSubHeading" colSpan="2">
												<p class="classFeatureHead">Domain</p>
											</td>
										</tr>
										<xsl:for-each select="Features/Feature[Disabled = 'False' and SourceFlag = 'Domain']">
											<xsl:sort select="SourceFlag"/>
											<xsl:sort select="SourceName"/>
											<tr>
												<td class="cellUnderline">
													<p class="classFeatureText"><a target="feature"><xsl:attribute name="href"><xsl:value-of select="HelpPage"/></xsl:attribute><xsl:value-of select="SourceName"/></a><xsl:text> - </xsl:text><xsl:value-of select="Description"/></p>
												</td>
											</tr>
										</xsl:for-each>
									</tbody>
								</table>
								</xsl:if>
								
								<xsl:if test="Features/Feature[Disabled = 'False' and SourceFlag = 'Specialization' and SourceName [contains(., 'Mantle: ')]]">
								<table cellSpacing="0" cellPadding="0" width="100%" border="0">
									<tbody></tbody>
								</table>
								<table cellSpacing="0" cellPadding="0" width="100%" border="0">
									<tbody>
										<tr>
											<td class="tableSubHeading" colSpan="2">
												<p class="classFeatureHead">Mantle</p>
											</td>
										</tr>
										<xsl:for-each select="Features/Feature[Disabled = 'False' and SourceFlag = 'Specialization' and SourceName [contains(., 'Mantle: ')]]">
											<xsl:sort select="SourceFlag"/>
											<xsl:sort select="SourceName"/>
											<tr>
												<td class="cellUnderline">
													<p class="classFeatureText"><a target="feature"><xsl:attribute name="href"><xsl:value-of select="HelpPage"/></xsl:attribute><xsl:value-of select="substring-after(SourceName, 'Mantle: ')"/></a><xsl:text> - </xsl:text><xsl:value-of select="Description"/></p>
												</td>
											</tr>
										</xsl:for-each>
									</tbody>
								</table>
								</xsl:if>
								<xsl:if test="Features/Feature[(Disabled = 'False' or not(Disabled)) and SourceFlag = 'User']">
								<table cellSpacing="0" cellPadding="0" width="100%" border="0">
									<tbody></tbody>
								</table>
								<table cellSpacing="0" cellPadding="0" width="100%" border="0">
								<tbody>
									<tr>
										<td class="tableSubHeading" colSpan="2"><p class="classFeatureHead">User</p></td>
									</tr>
									<xsl:for-each select="Features/Feature[(Disabled = 'False' or not(Disabled)) and SourceFlag = 'User']">
									<xsl:sort select="SourceFlag"/>
									<xsl:sort select="SourceName"/>
									<tr>
										<td class="cellUnderline">
											<p class="classFeatureText"><a target="feature"><xsl:attribute name="href"><xsl:value-of select="HelpPage"/></xsl:attribute><xsl:value-of select="FeatureName"/></a><xsl:text> - </xsl:text><xsl:value-of select="Description"/></p>
										</td>
									</tr>
									</xsl:for-each>
								</tbody>
								</table>
								</xsl:if>
								
								<span class="v3">
									<br/>
								</span>
								<table cellSpacing="0" cellPadding="0" width="100%" border="0">
									<tbody>
										<tr>
											<td class="tableHeading">
												<p class="tableHeadingText">Languages</p>
											</td>
										</tr>
										<tr>
											<td class="cellUnderline">
												<p class="classFeatureText">
												<xsl:for-each select="Languages/Language">
													<a target="language"><xsl:attribute name="href"><xsl:value-of select="HelpPage"/></xsl:attribute><xsl:value-of select="LanguageName"/></a>
													<xsl:if test="position() != last()">, </xsl:if>
												</xsl:for-each>
												</p>
											</td>
										</tr>
									</tbody>
								</table>
								<span class="v3">
									<br/>
								</span>
								<table cellSpacing="0" cellPadding="0" width="100%" bgColor="white" border="0">
									<tbody>
										<tr>
											<td width="30%"></td>
											<td width="70%"></td>
										</tr>
										<tr>
											<td class="tableHeading">
												<p class="tableHeadingText">Coins</p>
											</td>
											<td class="tableHeading">
												<p class="tableColumnText">New Coins<br/>
													Gained in Play</p>
											</td>
										</tr>
										<tr>
											<td class="v8" style="BORDER-RIGHT: black 1px dashed; BORDER-BOTTOM: black 1px solid"
												align="right" bgColor="#dddddd"><xsl:value-of select="Money"/>&#160;</td>
											<td class="v8" style="BORDER-BOTTOM: black 1px solid" bgColor="#dddddd"><br/>
											</td>
										</tr>
										<tr>
											<td class="v8" style="BORDER-RIGHT: black 1px dashed; BORDER-BOTTOM: black 1px solid"
												align="right">&#160;</td>
											<td class="v8" style="BORDER-BOTTOM: black 1px solid">&#160;</td>
										</tr>
										<tr>
											<td class="v8" style="BORDER-RIGHT: black 1px dashed; BORDER-BOTTOM: black 1px solid"
												align="right" bgColor="#dddddd">&#160;</td>
											<td class="v8" style="BORDER-BOTTOM: black 1px solid" bgColor="#dddddd">&#160;</td>
										</tr>
										<tr>
											<td class="v8" style="BORDER-RIGHT: black 1px dashed; BORDER-BOTTOM: black 1px solid"
												align="right">&#160;</td>
											<td class="v8" style="BORDER-BOTTOM: black 1px solid">&#160;</td>
										</tr>
									</tbody>
								</table>
								<span class="v3">
									<br/>
								</span>
							</td>
						</tr>
					</tbody>
				</table>
				
				<xsl:if test="SpellLikeAbilities/SpellLikeAbility">
					<table cellSpacing="0" cellPadding="2" width="100%" border="0">
						<tbody>
							<tr class="tableHeading">
								<td class="tableHeading" width="14%"><p class="tableHeadingText">Spell-Like Abilities
									<span class="tableColumnText">Name</span>
								</p></td>
								<td class="tableColumnText" width="9%" align="center">Caster Level</td>
								<td class="tableColumnText" width="11%" align="center">Usage</td>
								<td class="tableColumnText" width="6%" align="center">DC</td>
								<td class="tableColumnText" width="6%" align="center">SR</td>
								<td class="tableColumnText" width="10%" align="center">Casting</td>
								<td class="tableColumnText" width="10%" align="center">Range</td>
								<td class="tableColumnText" width="12%" align="center">Duration</td>
								<td class="tableColumnText" width="9%" align="center">Save</td>
								<td class="tableColumnText" width="12%" align="center">Source</td>
							</tr>
							<xsl:for-each select="SpellLikeAbilities/SpellLikeAbility">
							<tr>
			                    <xsl:if test="position() mod 2 = 0">
			                      <xsl:attribute name="bgcolor">#DDDDDD</xsl:attribute>
			                    </xsl:if>
								<td align="" style="border-bottom: 1px solid black; width=14%" class="v7">
									<a target="spell">
										<xsl:attribute name="href">
											<xsl:value-of select="AbilitySpell/HelpPage"/>
										</xsl:attribute>
										<xsl:value-of select="SpellName"/>
									</a>
								</td>
								<td align="center" style="border-bottom: 1px solid black; width=9%" class="v7"><xsl:value-of select="CasterLevel"/></td>
								<td align="center" style="border-bottom: 1px solid black; width=11%" class="v7"><xsl:value-of select="Usage"/></td>
								<td align="center" style="border-bottom: 1px solid black; width=6%" class="v7"><xsl:value-of select="DC"/></td>
								<td align="center" style="border-bottom: 1px solid black; width=6%" class="v7"><xsl:value-of select="AbilitySpell/SpellResistance"/></td>
								<td align="center" style="border-bottom: 1px solid black; width=10%" class="v7"><xsl:value-of select="AbilitySpell/Time"/></td>
								<td align="center" style="border-bottom: 1px solid black; width=10%" class="v7"><xsl:value-of select="AbilitySpell/Range"/></td>
								<td align="center" style="border-bottom: 1px solid black; width=12%" class="v7"><xsl:value-of select="AbilitySpell/Duration"/></td>
								<td align="center" style="border-bottom: 1px solid black; width=9%" class="v7"><xsl:value-of select="AbilitySpell/SavingThrow"/></td>
								<td align="center" style="border-bottom: 1px solid black; width=12%" class="v7"><xsl:value-of select="AbilitySpell/Sourcebook"/></td>
							</tr>
							</xsl:for-each>
						</tbody>
					</table>
					<xsl:if test="PsiLikeAbilities/PsiLikeAbility"><br/></xsl:if>
				</xsl:if>
				
				<xsl:if test="PsiLikeAbilities/PsiLikeAbility">
					<table cellSpacing="0" cellPadding="2" width="100%" border="0">
						<tbody>
							<tr class="tableHeading">
								<td class="tableHeading" width="14%"><p class="tableHeadingText">Psi-Like Abilities
									<span class="tableColumnText">Name</span>
								</p></td>
								<td class="tableColumnText" width="9%" align="center">Manifester Level</td>
								<td class="tableColumnText" width="11%" align="center">Usage</td>
								<td class="tableColumnText" width="6%" align="center">DC</td>
								<td class="tableColumnText" width="6%" align="center">PR</td>
								<td class="tableColumnText" width="10%" align="center">Manifesting</td>
								<td class="tableColumnText" width="10%" align="center">Range</td>
								<td class="tableColumnText" width="12%" align="center">Duration</td>
								<td class="tableColumnText" width="9%" align="center">Save</td>
								<td class="tableColumnText" width="12%" align="center">Source</td>
							</tr>
							<xsl:for-each select="PsiLikeAbilities/PsiLikeAbility">
							<tr>
			                    <xsl:if test="position() mod 2 = 0">
			                      <xsl:attribute name="bgcolor">#DDDDDD</xsl:attribute>
			                    </xsl:if>
								<td align="" style="border-bottom: 1px solid black; width=14%" class="v7">
									<a target="spell">
										<xsl:attribute name="href">
											<xsl:value-of select="AbilityPower/HelpPage"/>
										</xsl:attribute>
										<xsl:value-of select="PowerName"/>
									</a>
								</td>
								<td align="center" style="border-bottom: 1px solid black; width=9%" class="v7"><xsl:value-of select="ManifesterLevel"/></td>
								<td align="center" style="border-bottom: 1px solid black; width=11%" class="v7"><xsl:value-of select="Usage"/></td>
								<td align="center" style="border-bottom: 1px solid black; width=6%" class="v7"><xsl:value-of select="DC"/></td>
								<td align="center" style="border-bottom: 1px solid black; width=6%" class="v7"><xsl:value-of select="AbilityPower/PowerResistance"/></td>
								<td align="center" style="border-bottom: 1px solid black; width=10%" class="v7"><xsl:value-of select="AbilityPower/Time"/></td>
								<td align="center" style="border-bottom: 1px solid black; width=10%" class="v7"><xsl:value-of select="AbilityPower/Range"/></td>
								<td align="center" style="border-bottom: 1px solid black; width=12%" class="v7"><xsl:value-of select="AbilityPower/Duration"/></td>
								<td align="center" style="border-bottom: 1px solid black; width=9%" class="v7"><xsl:value-of select="AbilityPower/SavingThrow"/></td>
								<td align="center" style="border-bottom: 1px solid black; width=12%" class="v7"><xsl:value-of select="AbilityPower/Sourcebook"/></td>
							</tr>
							</xsl:for-each>
						</tbody>
					</table>
				</xsl:if>
				
				<xsl:if test="Notes != ''">
					<table cellSpacing="0" cellPadding="2" width="100%" border="0">
						<tbody>
							<tr>
								<td class="tableHeading"><p class="tableHeadingText">Notes</p></td>
							</tr>
							<tr>
								<td class="v7" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid">
									<xsl:call-template name="format-literal-content-helper">
										<xsl:with-param name="text" select="Notes"/>
									</xsl:call-template>
									<br/>
								</td>
							</tr>
						</tbody>
					</table>
				</xsl:if>
				
				<xsl:if test="Background != ''">
					<table cellSpacing="0" cellPadding="2" width="100%" border="0">
						<tbody>
							<tr>
								<td class="tableHeading"><p class="tableHeadingText">Background</p></td>
							</tr>
							<tr>
								<td class="v7" style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid">
									<xsl:call-template name="format-literal-content-helper">
										<xsl:with-param name="text" select="Background"/>
									</xsl:call-template>
									<br/>
								</td>
							</tr>
						</tbody>
					</table>
				</xsl:if>
					
				<xsl:for-each select="Spells/ClassSpells[not(ClassName = preceding-sibling::ClassSpells/ClassName)]">
				<br style="PAGE-BREAK-AFTER: always"/>
					<xsl:variable name="class" select="ClassName"/>
					<table cellSpacing="0" cellPadding="0" width="100%" border="0">
						<tbody>
							<tr>
								<td vAlign="top" width="49%">
									<table cellSpacing="0" cellPadding="0" width="100%" border="0">
										<tbody>
											<tr>
												<td class="v10w" style="BORDER-LEFT: black 3px solid" align="left" bgColor="black">
													<b><xsl:value-of select="translate(ClassName, $lcletters, $ucletters)"/> SPELLS
													<xsl:choose>
														<xsl:when test="/CharacterXMLDataset/Character/SpellCasterInfo/CasterClass[ClassName = $class]/MemorizedSpells and $UseSpellsPrepared = 'Yes'">
															PREPARED
														</xsl:when>
														<xsl:otherwise>
															KNOWN
														</xsl:otherwise>
													</xsl:choose>
													</b>
												</td>
											</tr>
											<tr>
												<td class="v8" align="left"/>
											</tr>
											<xsl:if test="../../Domains/Domain/ClassName/text() = $class">
												<xsl:if test="../../Deity != ''">
													<tr>
														<td class="v8" align="left"><b><i>Deity: </i><xsl:value-of select="../../Deity"/></b></td>
													</tr>
												</xsl:if>
												<tr>
													<td class="v8" align="left"><b><i>Domains: </i>
														<xsl:for-each select="../../Domains/Domain">
															<a target="domain"><xsl:attribute name="href"><xsl:value-of select="HelpPage"/></xsl:attribute><xsl:value-of select="DomainName"/></a><xsl:if test="position() != last()">, </xsl:if>
														</xsl:for-each>
														</b>
													</td>
												</tr>
											</xsl:if>
											<xsl:if test="../../SpecialistSchools/SpecialistSchool[ClassName = $class]">
												<tr>
												<td class="v8" align="left">
													<b>
													<i>Specialized: </i>
													<xsl:for-each select="../../SpecialistSchools/SpecialistSchool[ClassName = $class]">
														<a target="school"><xsl:attribute name="href"><xsl:value-of select="HelpPage"/></xsl:attribute><xsl:value-of select="SchoolName"/></a>
														<xsl:if test="position() != last()">, </xsl:if>
													</xsl:for-each>
													</b>
												</td>
												</tr>
											</xsl:if>
											<xsl:if test="../../ProhibitedSchools/ProhibitedSchool[ClassName = $class]">
												<tr>
												<td class="v8" align="left">
													<b>
													<i>Prohibited: </i>
													<xsl:for-each select="../../ProhibitedSchools/ProhibitedSchool[ClassName = $class]">
														<a target="school"><xsl:attribute name="href"><xsl:value-of select="HelpPage"/></xsl:attribute><xsl:value-of select="SchoolName"/></a>
														<xsl:if test="position() != last()">, </xsl:if>
													</xsl:for-each>
													</b>
												</td>
												</tr>
											</xsl:if>
											<xsl:if test="$UseSpellPoints = 'Yes'">
												<tr>
													<td class="v8" align="left">
														<xsl:for-each select="../../SpellCasterInfo/CasterClass">
															<xsl:if test="ClassName = $class">
																<b>Spell Points: <xsl:value-of select="SpellPoints"/></b>
															</xsl:if>
														</xsl:for-each>
													</td>
												</tr>
											</xsl:if>
										</tbody>
									</table>
								</td>
								<td width="1%"><br/>
								</td>
								<td vAlign="top" width="49%">
									<table cellSpacing="0" cellPadding="0" width="100%" border="0">
										<tbody>
											<tr bgColor="black">
												<td class="v10w" style="BORDER-LEFT: black 3px solid" width="14%"><b>LEVELS</b></td>
												<td class="v10w" align="middle" width="9%"><b>0</b></td>
												<td class="v10w" align="middle" width="9%"><b>1</b></td>
												<td class="v10w" align="middle" width="9%"><b>2</b></td>
												<td class="v10w" align="middle" width="9%"><b>3</b></td>
												<td class="v10w" align="middle" width="9%"><b>4</b></td>
												<td class="v10w" align="middle" width="9%"><b>5</b></td>
												<td class="v10w" align="middle" width="9%"><b>6</b></td>
												<td class="v10w" align="middle" width="9%"><b>7</b></td>
												<td class="v10w" align="middle" width="9%"><b>8</b></td>
												<td class="v10w" align="middle" width="9%"><b>9</b></td>
											</tr>
											<xsl:for-each select="../../SpellCasterInfo/CasterClass">
												<xsl:if test="ClassName = $class">
													<xsl:if test="CasterType = 'Known'">
														<tr>
															<td class="v8"><b>Known:</b></td>
															<xsl:for-each select="../../SpellCasterInfo/CasterClass">
																<xsl:if test="ClassName = $class">
																	<td class="v8" align="middle">
																		<xsl:choose>
																		<xsl:when test="SpellsKnown/SK0 = '0'">
																			—
																		</xsl:when>
																		<xsl:otherwise>
																			<xsl:value-of select="SpellsKnown/SK0"/>
																		</xsl:otherwise>
																		</xsl:choose>
																	</td>
																	<td class="v8" align="middle">
																		<xsl:choose>
																		<xsl:when test="SpellsKnown/SK1 = '0'">
																			—
																		</xsl:when>
																		<xsl:otherwise>
																			<xsl:value-of select="SpellsKnown/SK1"/>
																		</xsl:otherwise>
																		</xsl:choose>
																	</td>
																	<td class="v8" align="middle">
																		<xsl:choose>
																		<xsl:when test="SpellsKnown/SK2 = '0'">
																			—
																		</xsl:when>
																		<xsl:otherwise>
																			<xsl:value-of select="SpellsKnown/SK2"/>
																		</xsl:otherwise>
																		</xsl:choose>
																	</td>
																	<td class="v8" align="middle">
																		<xsl:choose>
																		<xsl:when test="SpellsKnown/SK3 = '0'">
																			—
																		</xsl:when>
																		<xsl:otherwise>
																			<xsl:value-of select="SpellsKnown/SK3"/>
																		</xsl:otherwise>
																		</xsl:choose>
																	</td>
																	<td class="v8" align="middle">
																		<xsl:choose>
																		<xsl:when test="SpellsKnown/SK4 = '0'">
																			—
																		</xsl:when>
																		<xsl:otherwise>
																			<xsl:value-of select="SpellsKnown/SK4"/>
																		</xsl:otherwise>
																		</xsl:choose>
																	</td>
																	<td class="v8" align="middle">
																		<xsl:choose>
																		<xsl:when test="SpellsKnown/SK5 = '0'">
																			—
																		</xsl:when>
																		<xsl:otherwise>
																			<xsl:value-of select="SpellsKnown/SK5"/>
																		</xsl:otherwise>
																		</xsl:choose>
																	</td>
																	<td class="v8" align="middle">
																		<xsl:choose>
																		<xsl:when test="SpellsKnown/SK6 = '0'">
																			—
																		</xsl:when>
																		<xsl:otherwise>
																			<xsl:value-of select="SpellsKnown/SK6"/>
																		</xsl:otherwise>
																		</xsl:choose>
																	</td>
																	<td class="v8" align="middle">
																		<xsl:choose>
																		<xsl:when test="SpellsKnown/SK7 = '0'">
																			—
																		</xsl:when>
																		<xsl:otherwise>
																			<xsl:value-of select="SpellsKnown/SK7"/>
																		</xsl:otherwise>
																		</xsl:choose>
																	</td>
																	<td class="v8" align="middle">
																		<xsl:choose>
																		<xsl:when test="SpellsKnown/SK8 = '0'">
																			—
																		</xsl:when>
																		<xsl:otherwise>
																			<xsl:value-of select="SpellsKnown/SK8"/>
																		</xsl:otherwise>
																		</xsl:choose>
																	</td>
																	<td class="v8" align="middle">
																		<xsl:choose>
																		<xsl:when test="SpellsKnown/SK9 = '0'">
																			—
																		</xsl:when>
																		<xsl:otherwise>
																			<xsl:value-of select="SpellsKnown/SK9"/>
																		</xsl:otherwise>
																		</xsl:choose>
																	</td>
																</xsl:if>
															</xsl:for-each>
														</tr>
													</xsl:if>
												</xsl:if>
											</xsl:for-each>
											
											<tr>
												<td class="v8"><b>Per Day:</b></td>
												<xsl:for-each select="../../SpellCasterInfo/CasterClass">
													<xsl:if test="ClassName = $class">
														<td class="v8" align="middle">
															<xsl:choose>
																<xsl:when test="SpellsPerDay/ClassSPD/SPD0 = '0'">
																—
																</xsl:when>
																<xsl:otherwise>
																<xsl:value-of select="SpellsPerDay/ClassSPD/SPD0"/>
																<xsl:if test="SpellsPerDay/DomainSPD/SPD0 != '0'">+<xsl:value-of select="SpellsPerDay/DomainSPD/SPD0"/></xsl:if>
																</xsl:otherwise>
															</xsl:choose>
														</td>
														<td class="v8" align="middle">
															<xsl:choose>
																<xsl:when test="SpellsPerDay/ClassSPD/SPD1 = '0'">
																—
																</xsl:when>
																<xsl:otherwise>
																<xsl:value-of select="SpellsPerDay/ClassSPD/SPD1"/>
																<xsl:if test="SpellsPerDay/DomainSPD/SPD1 != '0'">+<xsl:value-of select="SpellsPerDay/DomainSPD/SPD1"/></xsl:if>
																</xsl:otherwise>
															</xsl:choose>
														</td>
														<td class="v8" align="middle">
															<xsl:choose>
																<xsl:when test="SpellsPerDay/ClassSPD/SPD2 = '0'">
																—
																</xsl:when>
																<xsl:otherwise>
																<xsl:value-of select="SpellsPerDay/ClassSPD/SPD2"/>
																<xsl:if test="SpellsPerDay/DomainSPD/SPD2 != '0'">+<xsl:value-of select="SpellsPerDay/DomainSPD/SPD2"/></xsl:if>
																</xsl:otherwise>
															</xsl:choose>
														</td>
														<td class="v8" align="middle">
															<xsl:choose>
																<xsl:when test="SpellsPerDay/ClassSPD/SPD3 = '0'">
																—
																</xsl:when>
																<xsl:otherwise>
																<xsl:value-of select="SpellsPerDay/ClassSPD/SPD3"/>
																<xsl:if test="SpellsPerDay/DomainSPD/SPD3 != '0'">+<xsl:value-of select="SpellsPerDay/DomainSPD/SPD3"/></xsl:if>
																</xsl:otherwise>
															</xsl:choose>
														</td>
														<td class="v8" align="middle">
															<xsl:choose>
																<xsl:when test="SpellsPerDay/ClassSPD/SPD4 = '0'">
																—
																</xsl:when>
																<xsl:otherwise>
																<xsl:value-of select="SpellsPerDay/ClassSPD/SPD4"/>
																<xsl:if test="SpellsPerDay/DomainSPD/SPD4 != '0'">+<xsl:value-of select="SpellsPerDay/DomainSPD/SPD4"/></xsl:if>
																</xsl:otherwise>
															</xsl:choose>
														</td>
														<td class="v8" align="middle">
															<xsl:choose>
																<xsl:when test="SpellsPerDay/ClassSPD/SPD5 = '0'">
																—
																</xsl:when>
																<xsl:otherwise>
																<xsl:value-of select="SpellsPerDay/ClassSPD/SPD5"/>
																<xsl:if test="SpellsPerDay/DomainSPD/SPD5 != '0'">+<xsl:value-of select="SpellsPerDay/DomainSPD/SPD5"/></xsl:if>
																</xsl:otherwise>
															</xsl:choose>
														</td>
														<td class="v8" align="middle">
															<xsl:choose>
																<xsl:when test="SpellsPerDay/ClassSPD/SPD6 = '0'">
																—
																</xsl:when>
																<xsl:otherwise>
																<xsl:value-of select="SpellsPerDay/ClassSPD/SPD6"/>
																<xsl:if test="SpellsPerDay/DomainSPD/SPD6 != '0'">+<xsl:value-of select="SpellsPerDay/DomainSPD/SPD6"/></xsl:if>
																</xsl:otherwise>
															</xsl:choose>
														</td>
														<td class="v8" align="middle">
															<xsl:choose>
																<xsl:when test="SpellsPerDay/ClassSPD/SPD7 = '0'">
																—
																</xsl:when>
																<xsl:otherwise>
																<xsl:value-of select="SpellsPerDay/ClassSPD/SPD7"/>
																<xsl:if test="SpellsPerDay/DomainSPD/SPD7 != '0'">+<xsl:value-of select="SpellsPerDay/DomainSPD/SPD7"/></xsl:if>
																</xsl:otherwise>
															</xsl:choose>
														</td>
														<td class="v8" align="middle">
															<xsl:choose>
																<xsl:when test="SpellsPerDay/ClassSPD/SPD8 = '0'">
																—
																</xsl:when>
																<xsl:otherwise>
																<xsl:value-of select="SpellsPerDay/ClassSPD/SPD8"/>
																<xsl:if test="SpellsPerDay/DomainSPD/SPD8 != '0'">+<xsl:value-of select="SpellsPerDay/DomainSPD/SPD8"/></xsl:if>
																</xsl:otherwise>
															</xsl:choose>
														</td>
														<td class="v8" align="middle">
                              <xsl:choose>
                                <xsl:when test="SpellsPerDay/ClassSPD/SPD9 = '0'">
                                  —
                                </xsl:when>
                                <xsl:otherwise>
                                  <xsl:value-of select="SpellsPerDay/ClassSPD/SPD9"/>
                                  <xsl:if test="SpellsPerDay/DomainSPD/SPD9 != '0'">+<xsl:value-of select="SpellsPerDay/DomainSPD/SPD9"/>
                                  </xsl:if>
                                </xsl:otherwise>
                              </xsl:choose>
                            </td>
                          </xsl:if>
                        </xsl:for-each>
                      </tr>
                      
						<tr>
						<td class="v8"><b>Save:</b></td>
						<xsl:for-each select="../../SpellCasterInfo/CasterClass">
							<xsl:if test="ClassName = $class">
							<td class="v8" align="middle">
								<xsl:choose>
								<xsl:when test="SpellsPerDay/ClassSPD/SPD0 = '0'">—</xsl:when>
								<xsl:otherwise><xsl:value-of select="SpellSaves/SS0"/></xsl:otherwise>
								</xsl:choose>
							</td>
							<td class="v8" align="middle">
								<xsl:choose>
								<xsl:when test="SpellsPerDay/ClassSPD/SPD1 = '0'">—</xsl:when>
								<xsl:otherwise><xsl:value-of select="SpellSaves/SS1"/></xsl:otherwise>
								</xsl:choose>
							</td>
							<td class="v8" align="middle">
								<xsl:choose>
								<xsl:when test="SpellsPerDay/ClassSPD/SPD2 = '0'">—</xsl:when>
								<xsl:otherwise><xsl:value-of select="SpellSaves/SS2"/></xsl:otherwise>
								</xsl:choose>
							</td>
							<td class="v8" align="middle">
								<xsl:choose>
								<xsl:when test="SpellsPerDay/ClassSPD/SPD3 = '0'">—</xsl:when>
								<xsl:otherwise><xsl:value-of select="SpellSaves/SS3"/></xsl:otherwise>
								</xsl:choose>
							</td>
							<td class="v8" align="middle">
								<xsl:choose>
								<xsl:when test="SpellsPerDay/ClassSPD/SPD4 = '0'">—</xsl:when>
								<xsl:otherwise><xsl:value-of select="SpellSaves/SS4"/></xsl:otherwise>
								</xsl:choose>
							</td>
							<td class="v8" align="middle">
								<xsl:choose>
								<xsl:when test="SpellsPerDay/ClassSPD/SPD5 = '0'">—</xsl:when>
								<xsl:otherwise><xsl:value-of select="SpellSaves/SS5"/></xsl:otherwise>
								</xsl:choose>
							</td>
							<td class="v8" align="middle">
								<xsl:choose>
								<xsl:when test="SpellsPerDay/ClassSPD/SPD6 = '0'">—</xsl:when>
								<xsl:otherwise><xsl:value-of select="SpellSaves/SS6"/></xsl:otherwise>
								</xsl:choose>
							</td>
							<td class="v8" align="middle">
								<xsl:choose>
								<xsl:when test="SpellsPerDay/ClassSPD/SPD7 = '0'">—</xsl:when>
								<xsl:otherwise><xsl:value-of select="SpellSaves/SS7"/></xsl:otherwise>
								</xsl:choose>
							</td>
							<td class="v8" align="middle">
								<xsl:choose>
								<xsl:when test="SpellsPerDay/ClassSPD/SPD8 = '0'">—</xsl:when>
								<xsl:otherwise><xsl:value-of select="SpellSaves/SS8"/></xsl:otherwise>
								</xsl:choose>
							</td>
							<td class="v8" align="middle">
								<xsl:choose>
								<xsl:when test="SpellsPerDay/ClassSPD/SPD9 = '0'">—</xsl:when>
								<xsl:otherwise><xsl:value-of select="SpellSaves/SS9"/></xsl:otherwise>
								</xsl:choose>
							</td>
							</xsl:if>
						</xsl:for-each>
						</tr>
						
						<xsl:for-each select="../../SpellCasterInfo/CasterClass">
							<xsl:if test="ClassName = $class">
								<xsl:if test="SpellCasterNotes != ''">
									<tr>
										<td class="v8" valign="top">
											<b>Notes: </b>
										</td>
										<td class="v8" colspan="10">
											<xsl:value-of select="SpellCasterNotes"/>
										</td>
									</tr>
								</xsl:if>
							</xsl:if>
						</xsl:for-each>
                      
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td class="v3" style="BORDER-TOP: black 1px solid" colSpan="3">
                  <br/>
                </td>
              </tr>
            </tbody>
          </table>
			<xsl:choose>
				<xsl:when test="/CharacterXMLDataset/Character/SpellCasterInfo/CasterClass[ClassName = $class]/MemorizedSpells  and $UseSpellsPrepared = 'Yes'">
					
		          <xsl:for-each select="/CharacterXMLDataset/Character/SpellCasterInfo/CasterClass[ClassName = $class]/MemorizedSpells">
		            <xsl:sort select="SlotLevel"/>
		            <br/>
		            <xsl:variable name="level" select="SlotLevel"/>
		            <table cellSpacing="0" cellPadding="0" width="100%" align="top" bgColor="white" border="0">
		              <tbody>
		                <tr>
		                  <td align="middle" width="100%" bgColor="black" colSpan="10">
		                    <font style="FONT-SIZE: 9pt" face="Verdana" color="white">
		                      <b>
		                        <xsl:value-of select="SlotLevel"/>
		                        <xsl:choose>
		                          <xsl:when test="SlotLevel = '0'"/>
		                          <xsl:when test="SlotLevel = '1'">st</xsl:when>
		                          <xsl:when test="SlotLevel = '2'">nd</xsl:when>
		                          <xsl:when test="SlotLevel = '3'">rd</xsl:when>
		                          <xsl:otherwise>th</xsl:otherwise>
		                        </xsl:choose>
		                        LEVEL
		                      </b>
		                    </font>
		                  </td>
		                </tr>
		                <tr bgColor="#666666">
		                  <td class="v6w" align="middle">
		                    <b>PREP</b>
		                  </td>
		                  <td class="v6w" align="middle">
		                    <b>SPELL NAME</b>
		                  </td>
		                  <td class="v6w" align="middle">
		                    <b>VSM</b>
		                  </td>
		                  <td class="v6w" align="middle">
		                    <b>DC</b>
		                  </td>
		                  <td class="v6w" align="middle">
		                    <b>SR</b>
		                  </td>
		                  <td class="v6w" align="middle">
		                    <b>CASTING</b>
		                  </td>
		                  <td class="v6w" align="middle">
		                    <b>RANGE</b>
		                  </td>
		                  <td class="v6w" align="middle">
		                    <b>DURATION</b>
		                  </td>
		                  <td class="v6w" align="middle">
		                    <b>SAVE</b>
		                  </td>
		                  <td class="v6w" align="middle">
		                    <b>SOURCE</b>
		                  </td>
		                </tr>
		                <tr>
		                  <td width="4%"></td>
		                  <td width="20%"></td>
		                  <td width="5%"></td>
		                  <td width="3%"></td>
		                  <td width="6%"></td>
		                  <td width="8%"></td>
		                  <td width="14%"></td>
		                  <td width="19%"></td>
		                  <td width="10%"></td>
		                  <td width="10%"></td>
		                </tr>

		                <xsl:for-each select="MemorizedSpell">
		                  <xsl:sort select="SpellName"/>
						  <xsl:variable name="spellname" select="SpellName"/>
		                  <tr>
		                    <xsl:if test="position() mod 2 = 0">
		                      <xsl:attribute name="bgcolor">#DDDDDD</xsl:attribute>
		                    </xsl:if>
		                    <td align="middle" valign="top">
		                      <font style="FONT-SIZE: 6pt" face="Verdana" color="black">
		                        <br/>
		                      </font>
		                    </td>
		                    <td valign="top">
		                      <font style="FONT-SIZE: 6pt" face="Verdana" color="black">
		                        <b>
									<a target="spell">
										<xsl:attribute name="href">
											<xsl:value-of select="/CharacterXMLDataset/Character/Spells/ClassSpells[ClassName = $class]/Spell[SpellName = $spellname]/HelpPage"/>
										</xsl:attribute>
										<xsl:value-of select="SpellName"/>
									</a>
									<xsl:if test="MetaTags">
										(<xsl:value-of select="MetaTags"/>)
									</xsl:if>
		                        </b>
		                        <br/>
		                      </font>
		                    </td>
		                    <td class="v6" align="middle" valign="top">
		                      <xsl:value-of select="/CharacterXMLDataset/Character/Spells/ClassSpells[ClassName = $class]/Spell[SpellName = $spellname]/Components"/>
		                    </td>
		                    <xsl:variable name="school" select="/CharacterXMLDataset/Character/Spells/ClassSpells[ClassName = $class]/Spell[SpellName = $spellname]/School"/>
		                    <xsl:variable name="subschool" select="/CharacterXMLDataset/Character/Spells/ClassSpells[ClassName = $class]/Spell[SpellName = $spellname]/subSchool"/>
		                    <xsl:variable name="descriptor" select="/CharacterXMLDataset/Character/Spells/ClassSpells[ClassName = $class]/Spell[SpellName = $spellname]/Descriptors"/>
							<xsl:variable name="savemod1" select="sum(/CharacterXMLDataset/Character/MagicModifiers/MagicModifier[Valid = 'True' and Enabled = 'True' and FocusName = $school and contains(SystemElement, ' DC ')]/ModifierValue)"/>
							<xsl:variable name="savemod2" select="sum(/CharacterXMLDataset/Character/MagicModifiers/MagicModifier[Valid = 'True' and Enabled = 'True' and contains($descriptor, FocusName) and contains(SystemElement, ' DC ')]/ModifierValue)"/>
							<xsl:variable name="savemod3" select="sum(/CharacterXMLDataset/Character/MagicModifiers/MagicModifier[Valid = 'True' and Enabled = 'True' and FocusName = $subschool and contains(SystemElement, ' DC ')]/ModifierValue)"/>
		                    <td align="middle" valign="top">
		                      <font style="FONT-SIZE: 6pt" face="Verdana" color="black">
		                        <xsl:choose>
		                          <xsl:when test="$level = '0'">
		                            <xsl:value-of select="/CharacterXMLDataset/Character/SpellCasterInfo/CasterClass[ClassName = $class]/SpellSaves/SS0 + $savemod1 + $savemod2 + $savemod3"/>
		                          </xsl:when>
		                          <xsl:when test="$level = '1'">
		                            <xsl:value-of select="/CharacterXMLDataset/Character/SpellCasterInfo/CasterClass[ClassName = $class]/SpellSaves/SS1 + $savemod1 + $savemod2 + $savemod3"/>
		                          </xsl:when>
		                          <xsl:when test="$level = '2'">
		                            <xsl:value-of select="/CharacterXMLDataset/Character/SpellCasterInfo/CasterClass[ClassName = $class]/SpellSaves/SS2 + $savemod1 + $savemod2 + $savemod3"/>
		                          </xsl:when>
		                          <xsl:when test="$level = '3'">
		                            <xsl:value-of select="/CharacterXMLDataset/Character/SpellCasterInfo/CasterClass[ClassName = $class]/SpellSaves/SS3 + $savemod1 + $savemod2 + $savemod3"/>
		                          </xsl:when>
		                          <xsl:when test="$level = '4'">
		                            <xsl:value-of select="/CharacterXMLDataset/Character/SpellCasterInfo/CasterClass[ClassName = $class]/SpellSaves/SS4 + $savemod1 + $savemod2 + $savemod3"/>
		                          </xsl:when>
		                          <xsl:when test="$level = '5'">
		                            <xsl:value-of select="/CharacterXMLDataset/Character/SpellCasterInfo/CasterClass[ClassName = $class]/SpellSaves/SS5 + $savemod1 + $savemod2 + $savemod3"/>
		                          </xsl:when>
		                          <xsl:when test="$level = '6'">
		                            <xsl:value-of select="/CharacterXMLDataset/Character/SpellCasterInfo/CasterClass[ClassName = $class]/SpellSaves/SS6 + $savemod1 + $savemod2 + $savemod3"/>
		                          </xsl:when>
		                          <xsl:when test="$level = '7'">
		                            <xsl:value-of select="/CharacterXMLDataset/Character/SpellCasterInfo/CasterClass[ClassName = $class]/SpellSaves/SS7 + $savemod1 + $savemod2 + $savemod3"/>
		                          </xsl:when>
		                          <xsl:when test="$level = '8'">
		                            <xsl:value-of select="/CharacterXMLDataset/Character/SpellCasterInfo/CasterClass[ClassName = $class]/SpellSaves/SS8 + $savemod1 + $savemod2 + $savemod3"/>
		                          </xsl:when>
		                          <xsl:when test="$level = '9'">
		                            <xsl:value-of select="/CharacterXMLDataset/Character/SpellCasterInfo/CasterClass[ClassName = $class]/SpellSaves/SS9 + $savemod1 + $savemod2 + $savemod3"/>
		                          </xsl:when>
		                        </xsl:choose>
		                        <br/>
		                      </font>
		                    </td>
		                    <td class="v6" align="middle" valign="top">
		                      <xsl:value-of select="/CharacterXMLDataset/Character/Spells/ClassSpells[ClassName = $class]/Spell[SpellName = $spellname]/SpellResistance"/>
		                      <br/>
		                    </td>
		                    <td class="v6" align="middle" valign="top">
		                      <xsl:value-of select="/CharacterXMLDataset/Character/Spells/ClassSpells[ClassName = $class]/Spell[SpellName = $spellname]/Time"/>
		                      <br/>
		                    </td>
		                    <td class="v6" align="middle" valign="top">
		                      <xsl:value-of select="/CharacterXMLDataset/Character/Spells/ClassSpells[ClassName = $class]/Spell[SpellName = $spellname]/Range"/>
		                      <br/>
		                    </td>
		                    <td class="v6" align="middle" valign="top">
		                      <xsl:value-of select="/CharacterXMLDataset/Character/Spells/ClassSpells[ClassName = $class]/Spell[SpellName = $spellname]/Duration"/>
		                      <br/>
		                    </td>
		                    <td class="v6" align="middle" valign="top">
		                      <xsl:value-of select="/CharacterXMLDataset/Character/Spells/ClassSpells[ClassName = $class]/Spell[SpellName = $spellname]/SavingThrow"/>
		                      <br/>
		                    </td>
		                    <td class="v6" align="left" valign="top">
		                      <xsl:value-of select="/CharacterXMLDataset/Character/Spells/ClassSpells[ClassName = $class]/Spell[SpellName = $spellname]/Sourcebook"/>
		                      <xsl:text> </xsl:text>
		                      <xsl:value-of select="/CharacterXMLDataset/Character/Spells/ClassSpells[ClassName = $class]/Spell[SpellName = $spellname]/PageNo"/>
		                      <br/>
		                    </td>
		                  </tr>
		                  <tr>
		                    <xsl:if test="position() mod 2 = 0">
		                      <xsl:attribute name="bgcolor">#DDDDDD</xsl:attribute>
		                    </xsl:if>
							<td></td>
							<td colspan="9">
								<font style="FONT-SIZE: 6pt" face="Verdana" color="black">
								<xsl:value-of select="/CharacterXMLDataset/Character/Spells/ClassSpells[ClassName = $class]/Spell[SpellName = $spellname]/Description"/>
								</font>
							</td>
		                  </tr>
		                </xsl:for-each>
		              </tbody>
		            </table>
				</xsl:for-each>
				</xsl:when>
				
				<xsl:otherwise>
		          <xsl:for-each select="/CharacterXMLDataset/Character/Spells/ClassSpells[ClassName = $class]">
		            <xsl:sort select="ClassName"/>
		            <xsl:sort select="SpellLevel"/>
		            <br/>
		            <xsl:variable name="level" select="SpellLevel"/>
		            <table cellSpacing="0" cellPadding="0" width="100%" align="top" bgColor="white" border="0">
		              <tbody>
		                <tr>
		                  <td align="middle" width="100%" bgColor="black" colSpan="10">
		                    <font style="FONT-SIZE: 9pt" face="Verdana" color="white">
		                      <b>
		                        <xsl:value-of select="SpellLevel"/>
		                        <xsl:choose>
		                          <xsl:when test="SpellLevel = '0'"/>
		                          <xsl:when test="SpellLevel = '1'">st</xsl:when>
		                          <xsl:when test="SpellLevel = '2'">nd</xsl:when>
		                          <xsl:when test="SpellLevel = '3'">rd</xsl:when>
		                          <xsl:otherwise>th</xsl:otherwise>
		                        </xsl:choose>
		                        LEVEL
		                      </b>
		                    </font>
		                  </td>
		                </tr>
		                <tr bgColor="#666666">
		                  <td class="v6w" align="middle">
		                    <b>PREP</b>
		                  </td>
		                  <td class="v6w" align="middle">
		                    <b>SPELL NAME</b>
		                  </td>
		                  <td class="v6w" align="middle">
		                    <b>VSM</b>
		                  </td>
		                  <td class="v6w" align="middle">
		                    <b>DC</b>
		                  </td>
		                  <td class="v6w" align="middle">
		                    <b>SR</b>
		                  </td>
		                  <td class="v6w" align="middle">
		                    <b>CASTING</b>
		                  </td>
		                  <td class="v6w" align="middle">
		                    <b>RANGE</b>
		                  </td>
		                  <td class="v6w" align="middle">
		                    <b>DURATION</b>
		                  </td>
		                  <td class="v6w" align="middle">
		                    <b>SAVE</b>
		                  </td>
		                  <td class="v6w" align="middle">
		                    <b>SOURCE</b>
		                  </td>
		                </tr>
		                <tr>
		                  <td width="4%"></td>
		                  <td width="20%"></td>
		                  <td width="5%"></td>
		                  <td width="3%"></td>
		                  <td width="6%"></td>
		                  <td width="8%"></td>
		                  <td width="14%"></td>
		                  <td width="19%"></td>
		                  <td width="10%"></td>
		                  <td width="10%"></td>
		                </tr>

		                <xsl:for-each select="Spell">
		                  <xsl:sort select="SpellName"/>
		                  <tr>
		                    <xsl:if test="position() mod 2 = 0">
		                      <xsl:attribute name="bgcolor">#DDDDDD</xsl:attribute>
		                    </xsl:if>
		                    <td align="middle" valign="top">
		                      <font style="FONT-SIZE: 6pt" face="Verdana" color="black">
		                        <br/>
		                      </font>
		                    </td>
		                    <td valign="top">
		                      <font style="FONT-SIZE: 6pt" face="Verdana" color="black">
		                        <b>
		                          <a target="spell">
		                            <xsl:attribute name="href">
		                              <xsl:value-of select="HelpPage"/>
		                            </xsl:attribute>
		                            <xsl:value-of select="SpellName"/>
		                          </a>
		                        </b>
		                        <br/>
		                      </font>
		                    </td>
		                    <td class="v6" align="middle" valign="top">
		                      <xsl:value-of select="Components"/>
		                    </td>
		                    <xsl:variable name="school" select="School"/>
		                    <xsl:variable name="subschool" select="subSchool"/>
		                    <xsl:variable name="descriptor" select="Descriptors"/>
							<xsl:variable name="savemod1" select="sum(/CharacterXMLDataset/Character/MagicModifiers/MagicModifier[Valid = 'True' and Enabled = 'True' and FocusName = $school and contains(SystemElement, ' DC ')]/ModifierValue)"/>
							<xsl:variable name="savemod2" select="sum(/CharacterXMLDataset/Character/MagicModifiers/MagicModifier[Valid = 'True' and Enabled = 'True' and contains($descriptor, FocusName) and contains(SystemElement, ' DC ')]/ModifierValue)"/>
							<xsl:variable name="savemod3" select="sum(/CharacterXMLDataset/Character/MagicModifiers/MagicModifier[Valid = 'True' and Enabled = 'True' and FocusName = $subschool and contains(SystemElement, ' DC ')]/ModifierValue)"/>
		                    <td align="middle" valign="top">
		                      <font style="FONT-SIZE: 6pt" face="Verdana" color="black">
		                        <xsl:choose>
		                          <xsl:when test="$level = '0'">
		                            <xsl:value-of select="/CharacterXMLDataset/Character/SpellCasterInfo/CasterClass[ClassName = $class]/SpellSaves/SS0 + $savemod1 + $savemod2 + $savemod3"/>
		                          </xsl:when>
		                          <xsl:when test="$level = '1'">
		                            <xsl:value-of select="/CharacterXMLDataset/Character/SpellCasterInfo/CasterClass[ClassName = $class]/SpellSaves/SS1 + $savemod1 + $savemod2 + $savemod3"/>
		                          </xsl:when>
		                          <xsl:when test="$level = '2'">
		                            <xsl:value-of select="/CharacterXMLDataset/Character/SpellCasterInfo/CasterClass[ClassName = $class]/SpellSaves/SS2 + $savemod1 + $savemod2 + $savemod3"/>
		                          </xsl:when>
		                          <xsl:when test="$level = '3'">
		                            <xsl:value-of select="/CharacterXMLDataset/Character/SpellCasterInfo/CasterClass[ClassName = $class]/SpellSaves/SS3 + $savemod1 + $savemod2 + $savemod3"/>
		                          </xsl:when>
		                          <xsl:when test="$level = '4'">
		                            <xsl:value-of select="/CharacterXMLDataset/Character/SpellCasterInfo/CasterClass[ClassName = $class]/SpellSaves/SS4 + $savemod1 + $savemod2 + $savemod3"/>
		                          </xsl:when>
		                          <xsl:when test="$level = '5'">
		                            <xsl:value-of select="/CharacterXMLDataset/Character/SpellCasterInfo/CasterClass[ClassName = $class]/SpellSaves/SS5 + $savemod1 + $savemod2 + $savemod3"/>
		                          </xsl:when>
		                          <xsl:when test="$level = '6'">
		                            <xsl:value-of select="/CharacterXMLDataset/Character/SpellCasterInfo/CasterClass[ClassName = $class]/SpellSaves/SS6 + $savemod1 + $savemod2 + $savemod3"/>
		                          </xsl:when>
		                          <xsl:when test="$level = '7'">
		                            <xsl:value-of select="/CharacterXMLDataset/Character/SpellCasterInfo/CasterClass[ClassName = $class]/SpellSaves/SS7 + $savemod1 + $savemod2 + $savemod3"/>
		                          </xsl:when>
		                          <xsl:when test="$level = '8'">
		                            <xsl:value-of select="/CharacterXMLDataset/Character/SpellCasterInfo/CasterClass[ClassName = $class]/SpellSaves/SS8 + $savemod1 + $savemod2 + $savemod3"/>
		                          </xsl:when>
		                          <xsl:when test="$level = '9'">
		                            <xsl:value-of select="/CharacterXMLDataset/Character/SpellCasterInfo/CasterClass[ClassName = $class]/SpellSaves/SS9 + $savemod1 + $savemod2 + $savemod3"/>
		                          </xsl:when>
		                        </xsl:choose>
		                        <br/>
		                      </font>
		                    </td>
		                    <td class="v6" align="middle" valign="top">
		                      <xsl:value-of select="SpellResistance"/>
		                      <br/>
		                    </td>
		                    <td class="v6" align="middle" valign="top">
		                      <xsl:value-of select="Time"/>
		                      <br/>
		                    </td>
		                    <td class="v6" align="middle" valign="top">
		                      <xsl:value-of select="Range"/>
		                      <br/>
		                    </td>
		                    <td class="v6" align="middle" valign="top">
		                      <xsl:value-of select="Duration"/>
		                      <br/>
		                    </td>
		                    <td class="v6" align="middle" valign="top">
		                      <xsl:value-of select="SavingThrow"/>
		                      <br/>
		                    </td>
		                    <td class="v6" align="left" valign="top">
		                      <xsl:value-of select="Sourcebook"/>
		                      <xsl:text> </xsl:text>
		                      <xsl:value-of select="PageNo"/>
		                      <br/>
		                    </td>
		                  </tr>
		                  <tr>
		                    <xsl:if test="position() mod 2 = 0">
		                      <xsl:attribute name="bgcolor">#DDDDDD</xsl:attribute>
		                    </xsl:if>
							<td></td>
							<td colspan="9">
								<font style="FONT-SIZE: 6pt" face="Verdana" color="black">
								<xsl:value-of select="Description"/>
								</font>
							</td>
		                  </tr>
		                </xsl:for-each>
		              </tbody>
		            </table>
				</xsl:for-each>
			</xsl:otherwise>
			</xsl:choose>
        </xsl:for-each>

        <xsl:for-each select="Powers/ClassPowers[not(ClassName = preceding-sibling::ClassPowers/ClassName)]">
		<br style="PAGE-BREAK-AFTER: always"/>
          <xsl:variable name="class" select="ClassName"/>
          <table cellSpacing="0" cellPadding="0" width="100%" border="0">
            <tbody>
              <tr>
                <td vAlign="top" width="49%">
                  <table cellSpacing="0" cellPadding="0" width="100%" border="0">
                    <tbody>
                      <tr>
                        <td class="v10w" style="BORDER-LEFT: black 3px solid" align="left" bgColor="black">
                          <b>
                            <xsl:value-of select="translate(ClassName, $lcletters, $ucletters)"/> POWERS
                          </b>
                        </td>
                      </tr>
                      <tr>
                        <td class="v8" align="left"/>
                      </tr>
							<xsl:if test="/CharacterXMLDataset/Character/PsionicSpecializations/PsionicSpecialization[ClassName = $class and PsionicSpecializationName [contains (., 'Mantle: ')]]">
								<tr>
									<td class="v8" align="left"><b><i>Mantles: </i>
										<xsl:for-each select="/CharacterXMLDataset/Character/PsionicSpecializations/PsionicSpecialization[ClassName = $class and PsionicSpecializationName [contains (., 'Mantle: ')]]">
											<xsl:sort select="PsionicSpecializationName"/>
											<a target="mantle"><xsl:attribute name="href"><xsl:value-of select="HelpPage"/></xsl:attribute><xsl:value-of select="substring-after(PsionicSpecializationName, 'Mantle: ')"/></a><xsl:if test="position() != last()">, </xsl:if>
										</xsl:for-each>
										</b>
									</td>
								</tr>
							</xsl:if>
							<xsl:if test="/CharacterXMLDataset/Character/PsionicSpecializations/PsionicSpecialization[ClassName = $class and PsionicSpecializationName [not(contains (., 'Mantle: '))]]">
								<tr>
									<td class="v8" align="left"><b><i>Discipline: </i>
										<xsl:for-each select="/CharacterXMLDataset/Character/PsionicSpecializations/PsionicSpecialization[ClassName = $class and PsionicSpecializationName [not(contains (., 'Mantle: '))]]">
											<xsl:sort select="PsionicSpecializationName"/>
											<a target="discipline"><xsl:attribute name="href"><xsl:value-of select="HelpPage"/></xsl:attribute><xsl:value-of select="PsionicSpecializationName"/></a><xsl:if test="position() != last()">, </xsl:if>
										</xsl:for-each>
										</b>
									</td>
								</tr>
							</xsl:if>
							<tr>
								<td class="v8" align="left"><b>Power Points:<xsl:text> </xsl:text><xsl:value-of select="/CharacterXMLDataset/Character/ManifesterInfo/PowerPoints"/></b></td>
							</tr>
							
                    </tbody>
                  </table>
                </td>
                <td width="1%">
                  <br/>
                </td>
                <td vAlign="top" width="49%">
                  <table cellSpacing="0" cellPadding="0" width="100%" border="0">
                    <tbody>
                      <tr bgColor="black">
                        <td class="v10w" style="BORDER-LEFT: black 3px solid" width="14%">
                          <b>LEVELS</b>
                        </td>
                        <td class="v10w" align="middle" width="9%">
                          <b>1</b>
                        </td>
                        <td class="v10w" align="middle" width="9%">
                          <b>2</b>
                        </td>
                        <td class="v10w" align="middle" width="9%">
                          <b>3</b>
                        </td>
                        <td class="v10w" align="middle" width="9%">
                          <b>4</b>
                        </td>
                        <td class="v10w" align="middle" width="9%">
                          <b>5</b>
                        </td>
                        <td class="v10w" align="middle" width="9%">
                          <b>6</b>
                        </td>
                        <td class="v10w" align="middle" width="9%">
                          <b>7</b>
                        </td>
                        <td class="v10w" align="middle" width="9%">
                          <b>8</b>
                        </td>
                        <td class="v10w" align="middle" width="9%">
                          <b>9</b>
                        </td>
                      </tr>
                      <tr>
                        <td class="v8">
                          <b>Known:</b>
                        </td>


                        <td class="v8" align="middle">
                          <xsl:choose>
                            <xsl:when test="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 1]/Power) = 0">
                              —
                            </xsl:when>
                            <xsl:otherwise>
                              <xsl:value-of select="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 1]/Power)"/>
                            </xsl:otherwise>
                          </xsl:choose>
                        </td>
                        <td class="v8" align="middle">
                          <xsl:choose>
                            <xsl:when test="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 2]/Power) = 0">
                              —
                            </xsl:when>
                            <xsl:otherwise>
                              <xsl:value-of select="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 2]/Power)"/>
                            </xsl:otherwise>
                          </xsl:choose>
                        </td>
                        <td class="v8" align="middle">
                          <xsl:choose>
                            <xsl:when test="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 3]/Power) = 0">
                              —
                            </xsl:when>
                            <xsl:otherwise>
                              <xsl:value-of select="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 3]/Power)"/>
                            </xsl:otherwise>
                          </xsl:choose>
                        </td>
                        <td class="v8" align="middle">
                          <xsl:choose>
                            <xsl:when test="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 4]/Power) = 0">
                              —
                            </xsl:when>
                            <xsl:otherwise>
                              <xsl:value-of select="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 4]/Power)"/>
                            </xsl:otherwise>
                          </xsl:choose>
                        </td>
                        <td class="v8" align="middle">
                          <xsl:choose>
                            <xsl:when test="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 5]/Power) = 0">
                              —
                            </xsl:when>
                            <xsl:otherwise>
                              <xsl:value-of select="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 5]/Power)"/>
                            </xsl:otherwise>
                          </xsl:choose>
                        </td>
                        <td class="v8" align="middle">
                          <xsl:choose>
                            <xsl:when test="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 6]/Power) = 0">
                              —
                            </xsl:when>
                            <xsl:otherwise>
                              <xsl:value-of select="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 6]/Power)"/>
                            </xsl:otherwise>
                          </xsl:choose>
                        </td>
                        <td class="v8" align="middle">
                          <xsl:choose>
                            <xsl:when test="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 7]/Power) = 0">
                              —
                            </xsl:when>
                            <xsl:otherwise>
                              <xsl:value-of select="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 7]/Power)"/>
                            </xsl:otherwise>
                          </xsl:choose>
                        </td>
                        <td class="v8" align="middle">
                          <xsl:choose>
                            <xsl:when test="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 8]/Power) = 0">
                              —
                            </xsl:when>
                            <xsl:otherwise>
                              <xsl:value-of select="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 8]/Power)"/>
                            </xsl:otherwise>
                          </xsl:choose>
                        </td>
                        <td class="v8" align="middle">
                          <xsl:choose>
                            <xsl:when test="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 9]/Power) = 0">
                              —
                            </xsl:when>
                            <xsl:otherwise>
                              <xsl:value-of select="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 9]/Power)"/>
                            </xsl:otherwise>
                          </xsl:choose>
                        </td>
											</tr>
											
											<tr>
											<td class="v8"><b>Save:</b></td>
											<xsl:for-each select="../../ManifesterInfo/ManifesterClass">
												<xsl:if test="ClassName = $class">
												<td class="v8" align="middle">
													<xsl:choose>
													<xsl:when test="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 1]/Power) = 0">—</xsl:when>
													<xsl:otherwise><xsl:value-of select="PowerSaves/PS1"/></xsl:otherwise>
													</xsl:choose>
												</td>
												<td class="v8" align="middle">
													<xsl:choose>
													<xsl:when test="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 2]/Power) = 0">—</xsl:when>
													<xsl:otherwise><xsl:value-of select="PowerSaves/PS2"/></xsl:otherwise>
													</xsl:choose>
												</td>
												<td class="v8" align="middle">
													<xsl:choose>
													<xsl:when test="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 3]/Power) = 0">—</xsl:when>
													<xsl:otherwise><xsl:value-of select="PowerSaves/PS3"/></xsl:otherwise>
													</xsl:choose>
												</td>
												<td class="v8" align="middle">
													<xsl:choose>
													<xsl:when test="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 4]/Power) = 0">—</xsl:when>
													<xsl:otherwise><xsl:value-of select="PowerSaves/PS4"/></xsl:otherwise>
													</xsl:choose>
												</td>
												<td class="v8" align="middle">
													<xsl:choose>
													<xsl:when test="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 5]/Power) = 0">—</xsl:when>
													<xsl:otherwise><xsl:value-of select="PowerSaves/PS5"/></xsl:otherwise>
													</xsl:choose>
												</td>
												<td class="v8" align="middle">
													<xsl:choose>
													<xsl:when test="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 6]/Power) = 0">—</xsl:when>
													<xsl:otherwise><xsl:value-of select="PowerSaves/PS6"/></xsl:otherwise>
													</xsl:choose>
												</td>
												<td class="v8" align="middle">
													<xsl:choose>
													<xsl:when test="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 7]/Power) = 0">—</xsl:when>
													<xsl:otherwise><xsl:value-of select="PowerSaves/PS7"/></xsl:otherwise>
													</xsl:choose>
												</td>
												<td class="v8" align="middle">
													<xsl:choose>
													<xsl:when test="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 8]/Power) = 0">—</xsl:when>
													<xsl:otherwise><xsl:value-of select="PowerSaves/PS8"/></xsl:otherwise>
													</xsl:choose>
												</td>
												<td class="v8" align="middle">
													<xsl:choose>
													<xsl:when test="count(/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class and PowerLevel = 9]/Power) = 0">—</xsl:when>
													<xsl:otherwise><xsl:value-of select="PowerSaves/PS9"/></xsl:otherwise>
													</xsl:choose>
												</td>
												</xsl:if>
											</xsl:for-each>
											</tr>
											
											<xsl:for-each select="../../ManifesterInfo/ManifesterClass">
												<xsl:if test="ClassName = $class">
													<xsl:if test="ManifesterNotes != ''">
														<tr>
															<td class="v8" valign="top">
																<b>Notes: </b>
															</td>
															<td class="v8" colspan="10">
																<xsl:value-of select="ManifesterNotes"/>
															</td>
														</tr>
													</xsl:if>
												</xsl:if>
											</xsl:for-each>
										</tbody>
									</table>
								</td>
							</tr>
							<tr>
								<td class="v3" style="BORDER-TOP: black 1px solid" colSpan="3"><br/>
								</td>
							</tr>
						</tbody>
					</table>
					<xsl:for-each select="/CharacterXMLDataset/Character/Powers/ClassPowers[ClassName = $class]">
					<xsl:sort select="ClassName"/>
					<xsl:sort select="PowerLevel"/>
					<br/>
					<xsl:variable name="level" select="PowerLevel"/>
					<table cellSpacing="0" cellPadding="0" width="100%" align="top" bgColor="white" border="0">
						<tbody>
							<tr>
								<td align="middle" width="100%" bgColor="black" colSpan="9"><font style="FONT-SIZE: 9pt" face="Verdana" color="white"><b>
									<xsl:value-of select="PowerLevel"/>
									<xsl:choose>
										<xsl:when test="PowerLevel = '0'"/>
										<xsl:when test="PowerLevel = '1'">st</xsl:when>
										<xsl:when test="PowerLevel = '2'">nd</xsl:when>
										<xsl:when test="PowerLevel = '3'">rd</xsl:when>
										<xsl:otherwise>th</xsl:otherwise>
									</xsl:choose>
									LEVEL </b></font>
								</td>
							</tr>
							<tr bgColor="#666666">
								<td class="v6w" align="middle"><b>POWER NAME</b></td>
								<td class="v6w" align="middle"><b>DISPLAY</b></td>
								<td class="v6w" align="middle"><b>DC</b></td>
								<td class="v6w" align="middle"><b>PR</b></td>
								<td class="v6w" align="middle"><b>MANIFESTING</b></td>
								<td class="v6w" align="middle"><b>RANGE</b></td>
								<td class="v6w" align="middle"><b>DURATION</b></td>
								<td class="v6w" align="middle"><b>SAVE</b></td>
								<td class="v6w" align="middle"><b>SOURCE</b></td>
							</tr>
							<tr>
								<td width="20%"></td>
								<td width="5%"></td>
								<td width="3%"></td>
								<td width="6%"></td>
								<td width="8%"></td>
								<td width="14%"></td>
								<td width="19%"></td>
								<td width="10%"></td>
								<td width="10%"></td>
							</tr>
							
							<xsl:for-each select="Power">
								<xsl:sort select="PowerName"/>
								<tr>
									<xsl:if test="position() mod 2 = 0">
										<xsl:attribute name="bgcolor">#DDDDDD</xsl:attribute>
									</xsl:if>
									<td valign="top">
										<font style="FONT-SIZE: 6pt" face="Verdana" color="black"><b><a target="power"><xsl:attribute name="href"><xsl:value-of select="HelpPage"/></xsl:attribute><xsl:value-of select="PowerName"/></a></b><br/></font>
									</td>
									<td class="v6" align="middle" valign="top"><xsl:value-of select="Display"/></td>
									<xsl:variable name="discipline" select="Discipline"/>
									<xsl:variable name="subdiscipline" select="Subdiscipline"/>
									<xsl:variable name="descriptor" select="Descriptors"/>
									<xsl:variable name="savemod1" select="sum(/CharacterXMLDataset/Character/PsionicModifiers/PsionicModifier[Valid = 'True' and Enabled = 'True' and FocusName = $discipline and contains(SystemElement, ' DC ')]/ModifierValue)"/>
									<xsl:variable name="savemod2" select="sum(/CharacterXMLDataset/Character/PsionicModifiers/PsionicModifier[Valid = 'True' and Enabled = 'True' and contains($descriptor, FocusName) and contains(SystemElement, ' DC ')]/ModifierValue)"/>
									<xsl:variable name="savemod3" select="sum(/CharacterXMLDataset/Character/PsionicModifiers/PsionicModifier[Valid = 'True' and Enabled = 'True' and FocusName = $subdiscipline and contains(SystemElement, ' DC ')]/ModifierValue)"/>
									<td align="middle" valign="top">
										<font style="FONT-SIZE: 6pt" face="Verdana" color="black">
										<xsl:choose>
											<xsl:when test="$level = '0'"><xsl:value-of select="/CharacterXMLDataset/Character/ManifesterInfo/ManifesterClass[ClassName = $class]/PowerSaves/PS0 + $savemod1 + $savemod2 + $savemod3"/></xsl:when>
											<xsl:when test="$level = '1'"><xsl:value-of select="/CharacterXMLDataset/Character/ManifesterInfo/ManifesterClass[ClassName = $class]/PowerSaves/PS1 + $savemod1 + $savemod2 + $savemod3"/></xsl:when>
											<xsl:when test="$level = '2'"><xsl:value-of select="/CharacterXMLDataset/Character/ManifesterInfo/ManifesterClass[ClassName = $class]/PowerSaves/PS2 + $savemod1 + $savemod2 + $savemod3"/></xsl:when>
											<xsl:when test="$level = '3'"><xsl:value-of select="/CharacterXMLDataset/Character/ManifesterInfo/ManifesterClass[ClassName = $class]/PowerSaves/PS3 + $savemod1 + $savemod2 + $savemod3"/></xsl:when>
											<xsl:when test="$level = '4'"><xsl:value-of select="/CharacterXMLDataset/Character/ManifesterInfo/ManifesterClass[ClassName = $class]/PowerSaves/PS4 + $savemod1 + $savemod2 + $savemod3"/></xsl:when>
											<xsl:when test="$level = '5'"><xsl:value-of select="/CharacterXMLDataset/Character/ManifesterInfo/ManifesterClass[ClassName = $class]/PowerSaves/PS5 + $savemod1 + $savemod2 + $savemod3"/></xsl:when>
											<xsl:when test="$level = '6'"><xsl:value-of select="/CharacterXMLDataset/Character/ManifesterInfo/ManifesterClass[ClassName = $class]/PowerSaves/PS6 + $savemod1 + $savemod2 + $savemod3"/></xsl:when>
											<xsl:when test="$level = '7'"><xsl:value-of select="/CharacterXMLDataset/Character/ManifesterInfo/ManifesterClass[ClassName = $class]/PowerSaves/PS7 + $savemod1 + $savemod2 + $savemod3"/></xsl:when>
											<xsl:when test="$level = '8'"><xsl:value-of select="/CharacterXMLDataset/Character/ManifesterInfo/ManifesterClass[ClassName = $class]/PowerSaves/PS8 + $savemod1 + $savemod2 + $savemod3"/></xsl:when>
											<xsl:when test="$level = '9'"><xsl:value-of select="/CharacterXMLDataset/Character/ManifesterInfo/ManifesterClass[ClassName = $class]/PowerSaves/PS9 + $savemod1 + $savemod2 + $savemod3"/></xsl:when>
										</xsl:choose>
										<br/></font>
									</td>
									<td class="v6" align="middle" valign="top">
										<xsl:value-of select="PowerResistance"/><br/>
									</td>
									<td class="v6" align="middle" valign="top">
										<xsl:value-of select="Time"/><br/>
									</td>
									<td class="v6" align="middle" valign="top">
										<xsl:value-of select="Range"/><br/>
									</td>
									<td class="v6" align="middle" valign="top">
										<xsl:value-of select="Duration"/><br/>
									</td>
									<td class="v6" align="middle" valign="top">
										<xsl:value-of select="SavingThrow"/><br/>
									</td>
									<td class="v6" align="left" valign="top">
										<xsl:value-of select="Sourcebook"/><xsl:text> </xsl:text><xsl:value-of select="PageNo"/><br/>
									</td>
								</tr>
								<tr>
									<xsl:if test="position() mod 2 = 0">
										<xsl:attribute name="bgcolor">#DDDDDD</xsl:attribute>
									</xsl:if>
									<td colspan="9">
										<font style="FONT-SIZE: 6pt" face="Verdana" color="black">
										<xsl:value-of select="Description"/>
										</font>
									</td>
								</tr>
							</xsl:for-each>
						</tbody>
					</table>
					</xsl:for-each>
				</xsl:for-each>
			</body>
		</html>
	</xsl:template>
	
	<xsl:template name="classfeatures">
		<xsl:param name="class" select="1"/>
		<tr>
			<td class="tableSubHeading">
				<p class="classFeatureHead"><xsl:value-of select="$class"/></p>
			</td>
		</tr>
		<xsl:for-each select="/CharacterXMLDataset/Character/Features/Feature[(Disabled = 'False' or not(Disabled)) and SourceName = $class]">
			<xsl:sort select="FeatureName"/>
			<tr>
				<td class="cellUnderline">
					<p class="classFeatureText"><a target="feature"><xsl:attribute name="href"><xsl:value-of select="HelpPage"/></xsl:attribute><xsl:value-of select="FeatureName"/></a>
					<xsl:if test="Description != ''">
						<xsl:text> - </xsl:text><xsl:value-of select="Description"/>
					</xsl:if></p>
				</td>
			</tr>
		</xsl:for-each>
	</xsl:template>

	<xsl:template name="calc-religion-turn-bonus">
		<xsl:choose>
		<xsl:when test="character/skills/skill[skillname = 'Knowledge (Religion)'] and @skillranks > 4">
			<xsl:value-of select="2"/>
		</xsl:when>
		<xsl:otherwise>
			<xsl:value-of select="0"/>
		</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
	
	<xsl:template name="equipment">
		<xsl:param name="container" select="1"/>
		<xsl:param name="name" select="1"/>
		<tr class="containerHead">
			<td colspan="12" align="middle"><xsl:value-of select="$name"/></td>
		</tr>
		<xsl:variable name="items" select="/CharacterXMLDataset/Character/Inventory/InventoryItem[ContainerKey = $container]"/>
		<xsl:variable name="halfcut" select="round(count($items) div 2)"/>
		<tr>
			<xsl:variable name="others" select="following-sibling::InventoryItem[position() &lt; 2 and ContainerKey = $container]" />
			<td colspan="6">
				<table cellSpacing="0" cellPadding="0" width="100%" bgColor="white" border="0">
					<xsl:for-each select="$items[position() &lt;= $halfcut]">
						<xsl:sort select="ItemName"/>
						<tr>
							<xsl:if test="position() mod 2 != 1">
								<xsl:attribute name="bgcolor">#DDDDDD</xsl:attribute>
							</xsl:if>
							<td width="2%" class="v7" style="BORDER-BOTTOM: black 1px solid">&#160;</td>
							<td width="52%" class="v7" style="BORDER-BOTTOM: black 1px solid"><a target="item"><xsl:attribute name="href"><xsl:value-of select="HelpPage"/></xsl:attribute><xsl:value-of select="ItemName"/></a><br/></td>
							<td width="10%" class="v7" style="BORDER-BOTTOM: black 1px solid"><xsl:value-of select="Charges"/><br/></td>
							<td width="14%" class="v7" style="BORDER-BOTTOM: black 1px solid"><xsl:choose><xsl:when test="ItemCost != ''"><xsl:value-of select="ItemCost"/></xsl:when><xsl:otherwise>0 gp</xsl:otherwise></xsl:choose></td>
							<td width="6%" class="v7" style="BORDER-BOTTOM: black 1px solid"><xsl:choose><xsl:when test="Quantity != ''"><xsl:value-of select="Quantity"/></xsl:when><xsl:otherwise>n/a</xsl:otherwise></xsl:choose></td>
							<td width="14%" class="v7" style="BORDER-RIGHT: black 1px solid; BORDER-BOTTOM: black 1px solid"><xsl:choose><xsl:when test="ItemWeight != ''"><xsl:value-of select="ItemWeight"/></xsl:when><xsl:otherwise>0 lb.</xsl:otherwise></xsl:choose></td>
						</tr>
					</xsl:for-each>
				</table>
			</td>
			<td colspan="6">
				<table cellSpacing="0" cellPadding="0" width="100%" bgColor="white" border="0">
					<xsl:for-each select="$items[position() &gt; $halfcut]">
						<xsl:sort select="ItemName"/>
						<tr>
							<xsl:if test="position() mod 2 != 1">
								<xsl:attribute name="bgcolor">#DDDDDD</xsl:attribute>
							</xsl:if>
							<td width="2%" class="v7" style="BORDER-BOTTOM: black 1px solid">&#160;</td>
							<td width="52%" class="v7" style="BORDER-BOTTOM: black 1px solid"><a target="item"><xsl:attribute name="href"><xsl:value-of select="HelpPage"/></xsl:attribute><xsl:value-of select="ItemName"/></a><br/></td>
							<td width="10%" class="v7" style="BORDER-BOTTOM: black 1px solid"><xsl:value-of select="Charges"/><br/></td>
							<td width="14%" class="v7" style="BORDER-BOTTOM: black 1px solid"><xsl:choose><xsl:when test="ItemCost != ''"><xsl:value-of select="ItemCost"/></xsl:when><xsl:otherwise>0 gp</xsl:otherwise></xsl:choose></td>
							<td width="6%" class="v7" style="BORDER-BOTTOM: black 1px solid"><xsl:choose><xsl:when test="Quantity != ''"><xsl:value-of select="Quantity"/></xsl:when><xsl:otherwise>n/a</xsl:otherwise></xsl:choose></td>
							<td width="14%" class="v7" style="BORDER-RIGHT: black 1px solid; BORDER-BOTTOM: black 1px solid"><xsl:choose><xsl:when test="ItemWeight != ''"><xsl:value-of select="ItemWeight"/></xsl:when><xsl:otherwise>0 lb.</xsl:otherwise></xsl:choose></td>
						</tr>
					</xsl:for-each>
					<xsl:if test="count($items) mod 2 != 0">
						<tr>
							<xsl:if test="last() mod 2 != 0">
								<xsl:attribute name="bgcolor">#DDDDDD</xsl:attribute>
							</xsl:if>
							<td width="2%" class="v7" style="BORDER-BOTTOM: black 1px solid">&#160;</td>
							<td width="52%" class="v7" style="BORDER-BOTTOM: black 1px solid">&#160;</td>
							<td width="10%" class="v7" style="BORDER-BOTTOM: black 1px solid">&#160;</td>
							<td width="14%" class="v7" style="BORDER-BOTTOM: black 1px solid">&#160;</td>
							<td width="6%" class="v7" style="BORDER-BOTTOM: black 1px solid">&#160;</td>
							<td width="14%" class="v7" style="BORDER-RIGHT: black 1px solid; BORDER-BOTTOM: black 1px solid">&#160;</td>
						</tr>
					</xsl:if>
				</table>
			</td>
		</tr>
	</xsl:template>
	
	<xsl:template name="emptyinventory">
		<xsl:param name="count" select="1"/>
		<xsl:if test="$count > 0">
			<tr>
				<xsl:if test="$count mod 2 != 0">
					<xsl:attribute name="bgcolor">#DDDDDD</xsl:attribute>
				</xsl:if>
				<td class="v7" style="BORDER-BOTTOM: black 1px solid">&#160;</td>
				<td class="v7" style="BORDER-BOTTOM: black 1px solid"><br/></td>
				<td class="v7" style="BORDER-BOTTOM: black 1px solid" align="middle"><br/></td>
				<td class="v7" style="BORDER-BOTTOM: black 1px solid" align="right"><br/></td>
				<td class="v7" style="BORDER-BOTTOM: black 1px solid" align="middle"><br/></td>
				<td class="v7" style="BORDER-RIGHT: black 1px solid; BORDER-BOTTOM: black 1px solid"><br/></td>
				<td class="v7" style="BORDER-BOTTOM: black 1px solid"><br/></td>
				<td class="v7" style="BORDER-BOTTOM: black 1px solid"><br/></td>
				<td class="v7" style="BORDER-BOTTOM: black 1px solid" align="middle"><br/></td>
				<td class="v7" style="BORDER-BOTTOM: black 1px solid" align="right"><br/></td>
				<td class="v7" style="BORDER-BOTTOM: black 1px solid" align="middle"><br/></td>
				<td class="v7" style="BORDER-RIGHT: black 1px solid; BORDER-BOTTOM: black 1px solid"><br/></td>
			</tr>
			<xsl:call-template name="emptyinventory">
				<xsl:with-param name="count" select="$count - 1"/>
			</xsl:call-template>
		</xsl:if>
	</xsl:template>
	
	<xsl:template name="assets">
		<xsl:for-each select="/CharacterXMLDataset/Character/Assets/AssetItem[position() mod 2 = 1]">
			<tr>
				<xsl:if test="position() mod 2 != 1">
					<xsl:attribute name="bgcolor">#DDDDDD</xsl:attribute>
				</xsl:if>
				<xsl:variable name="others" select="following-sibling::AssetItem[position() &lt; 2]" />
				<xsl:for-each select=".|$others">
					<td class="v7" style="BORDER-BOTTOM: black 1px solid">&#160;</td>
					<td class="v7" style="BORDER-BOTTOM: black 1px solid"><a target="item"><xsl:attribute name="href"><xsl:value-of select="HelpPage"/></xsl:attribute><xsl:value-of select="ItemName"/></a><br/></td>
					<td class="v7" style="BORDER-BOTTOM: black 1px solid" align="middle"><xsl:value-of select="Charges"/><br/></td>
					<td class="v7" style="BORDER-BOTTOM: black 1px solid" align="right"><xsl:choose><xsl:when test="ItemCost != ''"><xsl:value-of select="ItemCost"/></xsl:when><xsl:otherwise>0 gp</xsl:otherwise></xsl:choose></td>
					<td class="v7" style="BORDER-BOTTOM: black 1px solid" align="middle"><xsl:choose><xsl:when test="Quantity != ''"><xsl:value-of select="Quantity"/></xsl:when><xsl:otherwise>n/a</xsl:otherwise></xsl:choose></td>
					<td class="v7" style="BORDER-RIGHT: black 1px solid; BORDER-BOTTOM: black 1px solid"><xsl:choose><xsl:when test="ItemWeight != ''"><xsl:value-of select="ItemWeight"/></xsl:when><xsl:otherwise>0 lb.</xsl:otherwise></xsl:choose></td>
					<xsl:if test="not($others)">
						<td class="v7" style="BORDER-BOTTOM: black 1px solid"><br/></td>
						<td class="v7" style="BORDER-BOTTOM: black 1px solid"><br/></td>
						<td class="v7" style="BORDER-BOTTOM: black 1px solid" align="middle"><br/></td>
						<td class="v7" style="BORDER-BOTTOM: black 1px solid" align="right"><br/></td>
						<td class="v7" style="BORDER-BOTTOM: black 1px solid" align="middle"><br/></td>
						<td class="v7" style="BORDER-RIGHT: black 1px solid; BORDER-BOTTOM: black 1px solid"><br/></td>
					</xsl:if>
				</xsl:for-each>
			</tr>
		</xsl:for-each>
  </xsl:template>

</xsl:stylesheet>