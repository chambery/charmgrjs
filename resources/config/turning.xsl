<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" indent="no" encoding="UTF-8"/>
	<xsl:variable name="removebracket">()</xsl:variable>
	<xsl:variable name="replacebracket"></xsl:variable>
	
	<!-- Turning -->
	<!-- Determine the base effective cleric level: Class level for all classes with Turn Undead Tag + (Class level - 3) for all classes with Turn Undead -3 Tag -->
	<xsl:variable name="baseclericlevel">
		<xsl:value-of select="sum(/CharacterXMLDataset/Character/Classes/Class[contains(Tags,'Turn Undead') and not(contains(Tags, 'Turn Undead -'))]/ClassLevel) + (sum(/CharacterXMLDataset/Character/Classes/Class[contains(Tags,'Turn Undead -3')]/ClassLevel) + (count(/CharacterXMLDataset/Character/Classes/Class[contains(Tags,'Turn Undead -3')]) * -3)) + (sum(/CharacterXMLDataset/Character/Classes/Class[contains(Tags,'Turn Undead -2')]/ClassLevel) + (count(/CharacterXMLDataset/Character/Classes/Class[contains(Tags,'Turn Undead -2')]) * -2)) + (sum(/CharacterXMLDataset/Character/Classes/Class[contains(Tags,'Turn Undead -1')]/ClassLevel) + (count(/CharacterXMLDataset/Character/Classes/Class[contains(Tags,'Turn Undead -1')]) * -1))"/>
	</xsl:variable>
	
	<!-- Glory domain bonuses: +2 to effective cleric level, +1d6 of turning damage -->
	<xsl:variable name="glorybonus">
		<xsl:choose>
			<xsl:when test="/CharacterXMLDataset/Character/Domains/Domain[DomainName = 'Glory']">
				<xsl:value-of select="2"/>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="0"/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:variable>
	
	<xsl:variable name="glorydamage">
		<xsl:choose>
			<xsl:when test="/CharacterXMLDataset/Character/Domains/Domain[DomainName = 'Glory']">
				<xsl:value-of select="1"/>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="0"/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:variable>
	
	<!-- Determine the number of turning dice: base 2d6 + bonus granted from Glory domain if applicable -->
	<xsl:variable name="turningdice" select="2 + $glorydamage"/>
	
	<!-- Determine number of additional turning attempts: +4 for each time Extra Turning feat was taken -->
	<xsl:variable name="cextraturns">
		<xsl:value-of select="4 * count(/CharacterXMLDataset/Character/CoreModifiers/CoreModifier[Source = 'Extra Turning']/ModifierValue)"/>
	</xsl:variable>
	<!-- Determine bonus to effective cleric level: +1 for each time Improved Turning feat was taken -->
	<xsl:variable name="turnlvladder">
		<xsl:value-of select="count(/CharacterXMLDataset/Character/Feats/Feat[FeatName = 'Improved Turning'])"/>
	</xsl:variable>
	<!-- +2 bonus from Knowledge (religion) -->
	<xsl:variable name="religion">
		<xsl:choose>
			<xsl:when test="/CharacterXMLDataset/Character/Skills/Skill[SkillName = 'Knowledge (Religion)']/SkillRanks > 4">
				<xsl:value-of select="2"/>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="0"/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:variable>
	<!-- Necromantic Prowess -->
	<xsl:variable name="prowess">
		<xsl:choose>
			<xsl:when test="/CharacterXMLDataset/Character/Features/Feature/FeatureName/text()[contains(.,'Necromantic Prowess')]">
				<xsl:value-of select="translate(substring-after(/CharacterXMLDataset/Character/Features/Feature/FeatureName/text()[contains(.,'Necromantic Prowess')], '+ '), $removebracket, $replacebracket)"/>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="0"/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:variable>
	<!-- Determine final values -->
	<xsl:variable name="effclericlevel" select ="$baseclericlevel + $turnlvladder + $prowess" />
	<xsl:variable name="turn-bonus" select="translate(/CharacterXMLDataset/Character/CHAMod, '+', '')"/>
	<xsl:variable name="one-half" select="'&#xbd;'"/>
	<xsl:variable name="turnperday" select="translate(/CharacterXMLDataset/Character/CHAMod, $removeplus, $replaceplus) + 3" />
	<!-- End Turning -->
	
	<xsl:variable name="TotalTurnUndeadPerDay" select="$turnperday + $cextraturns"/>
	<xsl:variable name="TotalTurningCheck" select="$turn-bonus + $religion + $glorybonus"/>
	
</xsl:stylesheet>