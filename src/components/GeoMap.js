import React from 'react';
import Chart from 'react-google-charts';

const GeoMap = () => {
    return (
        <Chart
            width="300px"
            height="160px"
            chartType="GeoChart"
            data={[
                ['Country', 'Order', 'Revenue'],
                ['United States', 397, 23297],
                ['United States', 378, 21397],
                ['China', 220, 18398],
                ['Canada', 140, 13391],
                ['France', 123, 1256],
                ['RU', 120, 10235],
            ]}
            // Note: you will need to get a mapsApiKey for your project.
            // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
            mapsApiKey="YOUR_KEY_HERE"
            rootProps={{ 'data-testid': '1' }}
        />
    );
};

export default GeoMap;
