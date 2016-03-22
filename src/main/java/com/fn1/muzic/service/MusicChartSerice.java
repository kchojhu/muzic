package com.fn1.muzic.service;

import com.fn1.muzic.model.Songs;

public interface MusicChartSerice {

	Songs getSongs();
	
	Songs getSongs(String country);
	
}
