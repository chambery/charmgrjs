<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" indent="no" encoding="UTF-8"/>
	
	<!-- INSTALLATION DIRECTORY -->
	<!-- Unless you have installed RPGXplorer to something other than the default directory, you should not need to change this line. -->
	<xsl:variable name="InstallPath" select="'file://C:/Program Files/RPGXplorer/Characters and Rules'"/>
	
	<!-- SPELL POINTS -->
	<!-- Change the word No to Yes to use spell points. Keep the ''. This IS case-sensitive. -->
	<xsl:variable name="UseSpellPoints" select="'No'"/>
	
	<!-- INVENTORY LINES -->
	<!-- This is the number of additional blank inventory lines you would like to include on your character sheets. -->
	<xsl:variable name="BlankInventoryLines" select="0"/>
	
	<!-- ADDITIONAL SKILLS FOR CHARACTER CARD -->
	<!-- These are the four additional skills that appear on the Character Card sheets. You can change the skills displayed by changing the names here. The names ARE case-sensitive. -->
	<xsl:variable name="ExtraSkill1" select="'Climb'"/>
	<xsl:variable name="ExtraSkill2" select="'Jump'"/>
	<xsl:variable name="ExtraSkill3" select="'Sleight of Hand'"/>
	<xsl:variable name="ExtraSkill4" select="'Tumble'"/>
	
	<!-- SPELLS PREPARED -->
	<!-- Use Spells Prepared for classes that prepare spells by default. A value of Yes means that casters who prepare spells will print only the spells they have prepared. A value of No will print all of the spells they have access to (old behaviour). This does not affect spontaneous casting classes.-->
	<xsl:variable name="UseSpellsPrepared" select="'Yes'"/>
	
</xsl:stylesheet>