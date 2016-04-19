package com.fn1.muzic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fn1.muzic.model.Songs;
import com.fn1.muzic.service.MusicChartSerice;

@RestController
@RequestMapping("/chart")
public class MusicChartController {

	@Autowired
	@Qualifier("kPopService")
	private MusicChartSerice kPopService;

	@Autowired
	@Qualifier("usPoPService")
	private MusicChartSerice usPopService;

	@Autowired
	@Qualifier("jPoPService")
	private MusicChartSerice jPopService;

	@Autowired
	@Qualifier("mellonService")
	private MusicChartSerice mellonService;
	
	@Autowired
	@Qualifier("ituneService")
	private MusicChartSerice ituneService;
	
	@RequestMapping("/top100")
	public Songs top100(@RequestParam String country) {
		switch (country) {
		case "Korean":
			return kPopService.getSongs();
		case "American":
			return usPopService.getSongs();
		case "Japanese":
			return jPopService.getSongs();
		case "Dance":
			return mellonService.getSongs(country);
		}
		return null;
	}

	@RequestMapping("/ituneTop100")
	public Songs ituneTop100(@RequestParam String country) {
		return ituneService.getSongs(country);
	}	
	
}
