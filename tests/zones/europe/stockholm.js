"use strict";

var helpers = require("../../helpers/helpers");

exports["Europe/Stockholm"] = {

	"guess:by:offset" : helpers.makeTestGuess("Europe/Stockholm", { offset: true, expect: "Europe/Paris" }),

	"guess:by:abbr" : helpers.makeTestGuess("Europe/Stockholm", { abbr: true, expect: "Europe/Paris" }),

	"1916" : helpers.makeTestYear("Europe/Stockholm", [
		["1916-05-14T21:59:59+00:00", "22:59:59", "CET", -60],
		["1916-05-14T22:00:00+00:00", "00:00:00", "CEST", -120],
		["1916-09-30T22:59:59+00:00", "00:59:59", "CEST", -120],
		["1916-09-30T23:00:00+00:00", "00:00:00", "CET", -60]
	]),

	"1980" : helpers.makeTestYear("Europe/Stockholm", [
		["1980-04-06T00:59:59+00:00", "01:59:59", "CET", -60],
		["1980-04-06T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1980-09-28T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1980-09-28T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1981" : helpers.makeTestYear("Europe/Stockholm", [
		["1981-03-29T00:59:59+00:00", "01:59:59", "CET", -60],
		["1981-03-29T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1981-09-27T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1981-09-27T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1982" : helpers.makeTestYear("Europe/Stockholm", [
		["1982-03-28T00:59:59+00:00", "01:59:59", "CET", -60],
		["1982-03-28T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1982-09-26T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1982-09-26T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1983" : helpers.makeTestYear("Europe/Stockholm", [
		["1983-03-27T00:59:59+00:00", "01:59:59", "CET", -60],
		["1983-03-27T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1983-09-25T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1983-09-25T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1984" : helpers.makeTestYear("Europe/Stockholm", [
		["1984-03-25T00:59:59+00:00", "01:59:59", "CET", -60],
		["1984-03-25T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1984-09-30T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1984-09-30T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1985" : helpers.makeTestYear("Europe/Stockholm", [
		["1985-03-31T00:59:59+00:00", "01:59:59", "CET", -60],
		["1985-03-31T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1985-09-29T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1985-09-29T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1986" : helpers.makeTestYear("Europe/Stockholm", [
		["1986-03-30T00:59:59+00:00", "01:59:59", "CET", -60],
		["1986-03-30T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1986-09-28T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1986-09-28T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1987" : helpers.makeTestYear("Europe/Stockholm", [
		["1987-03-29T00:59:59+00:00", "01:59:59", "CET", -60],
		["1987-03-29T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1987-09-27T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1987-09-27T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1988" : helpers.makeTestYear("Europe/Stockholm", [
		["1988-03-27T00:59:59+00:00", "01:59:59", "CET", -60],
		["1988-03-27T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1988-09-25T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1988-09-25T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1989" : helpers.makeTestYear("Europe/Stockholm", [
		["1989-03-26T00:59:59+00:00", "01:59:59", "CET", -60],
		["1989-03-26T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1989-09-24T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1989-09-24T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1990" : helpers.makeTestYear("Europe/Stockholm", [
		["1990-03-25T00:59:59+00:00", "01:59:59", "CET", -60],
		["1990-03-25T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1990-09-30T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1990-09-30T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1991" : helpers.makeTestYear("Europe/Stockholm", [
		["1991-03-31T00:59:59+00:00", "01:59:59", "CET", -60],
		["1991-03-31T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1991-09-29T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1991-09-29T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1992" : helpers.makeTestYear("Europe/Stockholm", [
		["1992-03-29T00:59:59+00:00", "01:59:59", "CET", -60],
		["1992-03-29T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1992-09-27T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1992-09-27T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1993" : helpers.makeTestYear("Europe/Stockholm", [
		["1993-03-28T00:59:59+00:00", "01:59:59", "CET", -60],
		["1993-03-28T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1993-09-26T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1993-09-26T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1994" : helpers.makeTestYear("Europe/Stockholm", [
		["1994-03-27T00:59:59+00:00", "01:59:59", "CET", -60],
		["1994-03-27T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1994-09-25T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1994-09-25T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1995" : helpers.makeTestYear("Europe/Stockholm", [
		["1995-03-26T00:59:59+00:00", "01:59:59", "CET", -60],
		["1995-03-26T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1995-09-24T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1995-09-24T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1996" : helpers.makeTestYear("Europe/Stockholm", [
		["1996-03-31T00:59:59+00:00", "01:59:59", "CET", -60],
		["1996-03-31T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1996-10-27T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1996-10-27T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1997" : helpers.makeTestYear("Europe/Stockholm", [
		["1997-03-30T00:59:59+00:00", "01:59:59", "CET", -60],
		["1997-03-30T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1997-10-26T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1997-10-26T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1998" : helpers.makeTestYear("Europe/Stockholm", [
		["1998-03-29T00:59:59+00:00", "01:59:59", "CET", -60],
		["1998-03-29T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1998-10-25T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1998-10-25T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1999" : helpers.makeTestYear("Europe/Stockholm", [
		["1999-03-28T00:59:59+00:00", "01:59:59", "CET", -60],
		["1999-03-28T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1999-10-31T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1999-10-31T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2000" : helpers.makeTestYear("Europe/Stockholm", [
		["2000-03-26T00:59:59+00:00", "01:59:59", "CET", -60],
		["2000-03-26T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2000-10-29T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2000-10-29T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2001" : helpers.makeTestYear("Europe/Stockholm", [
		["2001-03-25T00:59:59+00:00", "01:59:59", "CET", -60],
		["2001-03-25T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2001-10-28T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2001-10-28T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2002" : helpers.makeTestYear("Europe/Stockholm", [
		["2002-03-31T00:59:59+00:00", "01:59:59", "CET", -60],
		["2002-03-31T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2002-10-27T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2002-10-27T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2003" : helpers.makeTestYear("Europe/Stockholm", [
		["2003-03-30T00:59:59+00:00", "01:59:59", "CET", -60],
		["2003-03-30T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2003-10-26T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2003-10-26T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2004" : helpers.makeTestYear("Europe/Stockholm", [
		["2004-03-28T00:59:59+00:00", "01:59:59", "CET", -60],
		["2004-03-28T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2004-10-31T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2004-10-31T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2005" : helpers.makeTestYear("Europe/Stockholm", [
		["2005-03-27T00:59:59+00:00", "01:59:59", "CET", -60],
		["2005-03-27T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2005-10-30T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2005-10-30T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2006" : helpers.makeTestYear("Europe/Stockholm", [
		["2006-03-26T00:59:59+00:00", "01:59:59", "CET", -60],
		["2006-03-26T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2006-10-29T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2006-10-29T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2007" : helpers.makeTestYear("Europe/Stockholm", [
		["2007-03-25T00:59:59+00:00", "01:59:59", "CET", -60],
		["2007-03-25T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2007-10-28T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2007-10-28T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2008" : helpers.makeTestYear("Europe/Stockholm", [
		["2008-03-30T00:59:59+00:00", "01:59:59", "CET", -60],
		["2008-03-30T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2008-10-26T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2008-10-26T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2009" : helpers.makeTestYear("Europe/Stockholm", [
		["2009-03-29T00:59:59+00:00", "01:59:59", "CET", -60],
		["2009-03-29T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2009-10-25T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2009-10-25T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2010" : helpers.makeTestYear("Europe/Stockholm", [
		["2010-03-28T00:59:59+00:00", "01:59:59", "CET", -60],
		["2010-03-28T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2010-10-31T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2010-10-31T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2011" : helpers.makeTestYear("Europe/Stockholm", [
		["2011-03-27T00:59:59+00:00", "01:59:59", "CET", -60],
		["2011-03-27T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2011-10-30T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2011-10-30T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2012" : helpers.makeTestYear("Europe/Stockholm", [
		["2012-03-25T00:59:59+00:00", "01:59:59", "CET", -60],
		["2012-03-25T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2012-10-28T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2012-10-28T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2013" : helpers.makeTestYear("Europe/Stockholm", [
		["2013-03-31T00:59:59+00:00", "01:59:59", "CET", -60],
		["2013-03-31T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2013-10-27T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2013-10-27T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2014" : helpers.makeTestYear("Europe/Stockholm", [
		["2014-03-30T00:59:59+00:00", "01:59:59", "CET", -60],
		["2014-03-30T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2014-10-26T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2014-10-26T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2015" : helpers.makeTestYear("Europe/Stockholm", [
		["2015-03-29T00:59:59+00:00", "01:59:59", "CET", -60],
		["2015-03-29T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2015-10-25T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2015-10-25T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2016" : helpers.makeTestYear("Europe/Stockholm", [
		["2016-03-27T00:59:59+00:00", "01:59:59", "CET", -60],
		["2016-03-27T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2016-10-30T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2016-10-30T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2017" : helpers.makeTestYear("Europe/Stockholm", [
		["2017-03-26T00:59:59+00:00", "01:59:59", "CET", -60],
		["2017-03-26T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2017-10-29T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2017-10-29T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2018" : helpers.makeTestYear("Europe/Stockholm", [
		["2018-03-25T00:59:59+00:00", "01:59:59", "CET", -60],
		["2018-03-25T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2018-10-28T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2018-10-28T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2019" : helpers.makeTestYear("Europe/Stockholm", [
		["2019-03-31T00:59:59+00:00", "01:59:59", "CET", -60],
		["2019-03-31T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2019-10-27T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2019-10-27T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2020" : helpers.makeTestYear("Europe/Stockholm", [
		["2020-03-29T00:59:59+00:00", "01:59:59", "CET", -60],
		["2020-03-29T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2020-10-25T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2020-10-25T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2021" : helpers.makeTestYear("Europe/Stockholm", [
		["2021-03-28T00:59:59+00:00", "01:59:59", "CET", -60],
		["2021-03-28T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2021-10-31T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2021-10-31T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2022" : helpers.makeTestYear("Europe/Stockholm", [
		["2022-03-27T00:59:59+00:00", "01:59:59", "CET", -60],
		["2022-03-27T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2022-10-30T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2022-10-30T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2023" : helpers.makeTestYear("Europe/Stockholm", [
		["2023-03-26T00:59:59+00:00", "01:59:59", "CET", -60],
		["2023-03-26T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2023-10-29T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2023-10-29T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2024" : helpers.makeTestYear("Europe/Stockholm", [
		["2024-03-31T00:59:59+00:00", "01:59:59", "CET", -60],
		["2024-03-31T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2024-10-27T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2024-10-27T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2025" : helpers.makeTestYear("Europe/Stockholm", [
		["2025-03-30T00:59:59+00:00", "01:59:59", "CET", -60],
		["2025-03-30T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2025-10-26T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2025-10-26T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2026" : helpers.makeTestYear("Europe/Stockholm", [
		["2026-03-29T00:59:59+00:00", "01:59:59", "CET", -60],
		["2026-03-29T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2026-10-25T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2026-10-25T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2027" : helpers.makeTestYear("Europe/Stockholm", [
		["2027-03-28T00:59:59+00:00", "01:59:59", "CET", -60],
		["2027-03-28T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2027-10-31T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2027-10-31T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2028" : helpers.makeTestYear("Europe/Stockholm", [
		["2028-03-26T00:59:59+00:00", "01:59:59", "CET", -60],
		["2028-03-26T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2028-10-29T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2028-10-29T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2029" : helpers.makeTestYear("Europe/Stockholm", [
		["2029-03-25T00:59:59+00:00", "01:59:59", "CET", -60],
		["2029-03-25T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2029-10-28T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2029-10-28T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2030" : helpers.makeTestYear("Europe/Stockholm", [
		["2030-03-31T00:59:59+00:00", "01:59:59", "CET", -60],
		["2030-03-31T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2030-10-27T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2030-10-27T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2031" : helpers.makeTestYear("Europe/Stockholm", [
		["2031-03-30T00:59:59+00:00", "01:59:59", "CET", -60],
		["2031-03-30T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2031-10-26T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2031-10-26T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2032" : helpers.makeTestYear("Europe/Stockholm", [
		["2032-03-28T00:59:59+00:00", "01:59:59", "CET", -60],
		["2032-03-28T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2032-10-31T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2032-10-31T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2033" : helpers.makeTestYear("Europe/Stockholm", [
		["2033-03-27T00:59:59+00:00", "01:59:59", "CET", -60],
		["2033-03-27T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2033-10-30T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2033-10-30T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2034" : helpers.makeTestYear("Europe/Stockholm", [
		["2034-03-26T00:59:59+00:00", "01:59:59", "CET", -60],
		["2034-03-26T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2034-10-29T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2034-10-29T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2035" : helpers.makeTestYear("Europe/Stockholm", [
		["2035-03-25T00:59:59+00:00", "01:59:59", "CET", -60],
		["2035-03-25T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2035-10-28T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2035-10-28T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2036" : helpers.makeTestYear("Europe/Stockholm", [
		["2036-03-30T00:59:59+00:00", "01:59:59", "CET", -60],
		["2036-03-30T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2036-10-26T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2036-10-26T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2037" : helpers.makeTestYear("Europe/Stockholm", [
		["2037-03-29T00:59:59+00:00", "01:59:59", "CET", -60],
		["2037-03-29T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2037-10-25T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2037-10-25T01:00:00+00:00", "02:00:00", "CET", -60]
	])
};