#gdalCMD1 = 'ogr2ogr -overwrite -f CSV "W:/Desktop/tripData2013/tables/trip_2013'+j+k+'_d_roadbed.csv" "W:/Desktop/tripData2013/taxi_2013'+j+'.gdb" "trip_2013'+j+k+'_d_road"'
import os
#run this only in windows with OSGEO4W Administrator Shell open
import csv

inSHP = '/Users/danielmsheehan/Desktop/maptimesql_points/maptimesql_points.shp'

#SQL = "SELECT ST_MakeLine (the_geom_webmercator ORDER BY _order ASC) AS the_geom_webmercator, route FROM maptimesql_points GROUP BY route"
SQL = '"SELECT ST_MakeLine (the_geom_webmercator ORDER BY _order ASC) AS the_geom_webmercator, route FROM maptimesql_points GROUP BY route"'
SQL = ''

gdalCMD1 = 'ogr2ogr -f "ESRI Shapefile" /Users/danielmsheehan/Desktop/maptimesql_points/maptimesql_line.shp /Users/danielmsheehan/Desktop/maptimesql_points/maptimesql_points.shp'






#print gdalCMD1
os.system(gdalCMD1)