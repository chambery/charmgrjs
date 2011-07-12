<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" indent="no" encoding="UTF-8"/>
	
	<!-- Barb Rage -->
	<xsl:variable name="hasrage">
		<xsl:choose>
			<xsl:when test="/CharacterXMLDataset/Character/Features/Feature/FeatureName/text()[contains(.,'Rage')]">
				<xsl:value-of select="1"/>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="0"/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:variable>
	<!-- Base Rage STR/CON Modifier -->
	<xsl:variable name="baseragestr">
		<xsl:choose>
			<xsl:when test="/CharacterXMLDataset/Character/Features/Feature/FeatureName/text()[contains(.,'Mighty Rage')]">
				<xsl:value-of select="8"/>
			</xsl:when>
			<xsl:when test="/CharacterXMLDataset/Character/Features/Feature/FeatureName/text()[contains(.,'Greater Rage') or contains(.,'Tireless Rage')]">
				<xsl:value-of select="6"/>
			</xsl:when>
			<xsl:when test="/CharacterXMLDataset/Character/Features/Feature/FeatureName/text()[contains(.,'Rage')]">
				<xsl:value-of select="4"/>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="0"/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:variable>
	<!-- End Base Rage STR/CON Modifier -->
	<!-- Base Rage AC Modifier -->
	<xsl:variable name="baserageac">
		<xsl:choose>
			<xsl:when test="/CharacterXMLDataset/Character/Features/Feature/FeatureName/text()[contains(.,'Rage')]">
				<xsl:value-of select="-2"/>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="0"/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:variable>
	<!-- End Base Rage AC Modifier -->
	<!-- Base Rage/day -->
	<xsl:variable name="baserageday">
		<xsl:choose>
			<xsl:when test="/CharacterXMLDataset/Character/Features/Feature/FeatureName/text()[contains(.,'Rage')]">
				<xsl:value-of select="substring-before(substring-after(/CharacterXMLDataset/Character/Features/Feature/FeatureName/text()[contains(.,'Rage')], 'Rage '), '/Day')"/>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="0"/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:variable>
	<!-- End Base Rage/day -->
	<!-- Base Rage Length -->
	<xsl:variable name="baseragelength" select="translate(/CharacterXMLDataset/Character/CONMod, $removeplus, $replaceplus) + 3"></xsl:variable>
	<!-- End Base RageLength -->
	
	<!-- Bonus Rage STR/CON Modifier -->
	<xsl:variable name="modragestr">
		<xsl:choose>
			<xsl:when test="/CharacterXMLDataset/Character/Feats/Feat/FeatName/text() = 'Reckless Rage'">
				<xsl:value-of select="2"/>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="0"/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:variable>
	<!-- End Bonus Rage STR/CON Modifier -->
	<!-- Bonus Rage AC Modifier -->
	<xsl:variable name="modrageac">
		<xsl:choose>
			<xsl:when test="/CharacterXMLDataset/Character/Feats/Feat/FeatName/text() = 'Reckless Rage'">
				<xsl:value-of select="-2"/>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="0"/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:variable>
	<!-- End Bonus Rage AC Modifier -->
	<!-- Bonus Rage AC Modifier -->
	<xsl:variable name="modrageday">
		<xsl:choose>
			<xsl:when test="/CharacterXMLDataset/Character/Feats/Feat/FeatName/text() = 'Extra Rage'">
				<xsl:value-of select="2 * count(/CharacterXMLDataset/Character/Feats/Feat/FeatName[text() = 'Extra Rage'])"/>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="0"/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:variable>
	<!-- End Bonus Rage AC Modifier -->
	
	<!-- Bonus Rage Length (Extend Rage) -->
	<xsl:variable name="modragelength">
		<xsl:choose>
			<xsl:when test="/CharacterXMLDataset/Character/Feats/Feat/FeatName/text() = 'Extend Rage'">
				<xsl:value-of select="5 * count(/CharacterXMLDataset/Character/Feats/Feat/FeatName[text() = 'Extend Rage'])"/>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="0"/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:variable>
	<!-- End Bonus Rage Length (Extend Rage) -->
	<!-- Bonus Rage Length (Reckless Rage) -->
	<xsl:variable name="modragelength2">
		<xsl:choose>
			<xsl:when test="/CharacterXMLDataset/Character/Feats/Feat/FeatName/text() = 'Reckless Rage'">
				<xsl:value-of select="1"/>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="0"/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:variable>
	<!-- End Bonus Rage Length (Reckless Rage) -->
	
	<!-- Final Values -->
	<xsl:variable name="ragestr" select="$baseragestr + $modragestr"/>
	<xsl:variable name="rageac" select="$baserageac + $modrageac"/>
	<xsl:variable name="rageday" select="$baserageday + $modrageday"/>
	<xsl:variable name="ragelength" select="$baseragelength + ($baseragestr div 2) + $modragelength + $modragelength2"/>
	
	<!-- End Rage -->
</xsl:stylesheet>