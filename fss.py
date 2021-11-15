import h5pyd
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.image as mpimgmu
from scipy.spatial import cKDTree


def nearest_site(tree, lat_coord, lon_coord):
    lat_lon = np.array([lat_coord, lon_coord])
    dist, pos = tree.query(lat_lon)
    return pos

# Open the desired year of nsrdb data
# server endpoint, username, password is found via a config file
f = h5pyd.File("/nrel/nsrdb/v3/nsrdb_2017.h5", 'r')

# Unlike the gridded WTK data the NSRDB is provided as sparse time-series dataset.
# The quickest way to find the nearest site it using a KDtree

dset = f['ghi']
dset_coords = f['coordinates'][...]

tree = cKDTree(dset_coords)


NorthEast = (29.87118286, -81.59522490)
NE_idx = nearest_site(tree, NorthEast[0], NorthEast[1] )

print("Site index for North East: \t\t {}".format(NE_idx))
print("Coordinates of North East: \t {}".format(NorthEast))
print("Coordinates of nearest point: \t {}".format(dset_coords[NE_idx]))

# Get the entire 2017 timeseries data for a point in NE Florida
tseries = dset[:, NE_idx] / dset.attrs['psm_scale_factor']

avg_ghi_NE= np.average(tseries)
print(avg_ghi_NE)



NorthCentral = (29.77932572, -83.32079287)
NC_idx = nearest_site(tree, NorthCentral[0], NorthCentral[1] )

print("Site index for North Central: \t\t {}".format(NC_idx))
print("Coordinates of North Central: \t {}".format(NorthCentral))
print("Coordinates of nearest point: \t {}".format(dset_coords[NC_idx]))

# Get the entire 2017 timeseries data for a point in NE Florida
tseries = dset[:, NE_idx] / dset.attrs['psm_scale_factor']

avg_ghi_NC= np.average(tseries)
print(avg_ghi_NC)

EastCentral = (27.84863054, -81.24634704)
EC_idx = nearest_site(tree, EastCentral[0], EastCentral[1])

print("Site index for East Central: \t\t {}".format(EC_idx))
print("Coordinates of East Central: \t {}".format(EastCentral))
print("Coordinates of nearest point: \t {}".format(dset_coords[EC_idx]))

# Get the entire 2017 timeseries data for a point in NE Florida
tseries = dset[:, EC_idx] / dset.attrs['psm_scale_factor']

avg_ghi_EC= np.average(tseries)
print(avg_ghi_EC)

EastPanhandle = (29.95979786, -82.95302493)
EP_idx = nearest_site(tree, EastPanhandle[0], EastPanhandle[1] )

print("Site index for East Panhandle: \t\t {}".format(EP_idx))
print("Coordinates of East Panhandle: \t {}".format(EastPanhandle))
print("Coordinates of nearest point: \t {}".format(dset_coords[EP_idx]))

# Get the entire 2017 timeseries data for a point in NE Florida
tseries = dset[:, EP_idx] / dset.attrs['psm_scale_factor']

avg_ghi_EP= np.average(tseries)
print(avg_ghi_EP)

WestCentral = (27.98507026, -82.67599571)
WC_idx = nearest_site(tree, WestCentral[0], WestCentral[1] )

print("Site index for West Central: \t\t {}".format(WC_idx))
print("Coordinates of West Central: \t {}".format(WestCentral))
print("Coordinates of nearest point: \t {}".format(dset_coords[WC_idx]))

# Get the entire 2017 timeseries data for a point in NE Florida
tseries = dset[:, WC_idx] / dset.attrs['psm_scale_factor']

avg_ghi_WC= np.average(tseries)
print(avg_ghi_WC)

SouthEast = (25.59026827, -81.49293699)
SE_idx = nearest_site(tree, SouthEast[0], SouthEast[1] )

print("Site index for South East: \t\t {}".format(SE_idx))
print("Coordinates of South East: \t {}".format(SouthEast))
print("Coordinates of nearest point: \t {}".format(dset_coords[SE_idx]))

# Get the entire 2017 timeseries data for a point in NE Florida
tseries = dset[:, SE_idx] / dset.attrs['psm_scale_factor']

avg_ghi_SE= np.average(tseries)
print(avg_ghi_SE)


SouthWest = (26.90352995, -80.96066978)
SW_idx = nearest_site(tree, SouthWest[0], SouthWest[1] )

print("Site index for South West: \t\t {}".format(SW_idx))
print("Coordinates of South West: \t {}".format(SouthWest))
print("Coordinates of nearest point: \t {}".format(dset_coords[SW_idx]))

# Get the entire 2017 timeseries data for a point in NE Florida
tseries = dset[:, SW_idx] / dset.attrs['psm_scale_factor']

avg_ghi_SW= np.average(tseries)
print(avg_ghi_SW)


WestPanhandle = (30.32994010, -87.49949022)
WP_idx = nearest_site(tree, WestPanhandle[0], WestPanhandle[1] )

print("Site index for West Panhandle: \t\t {}".format(WP_idx))
print("Coordinates of West Panhandle: \t {}".format(WestPanhandle))
print("Coordinates of nearest point: \t {}".format(dset_coords[WP_idx]))

# Get the entire 2017 timeseries data for a point in NE Florida
tseries = dset[:, WP_idx] / dset.attrs['psm_scale_factor']

avg_ghi_WP= np.average(tseries)
print(avg_ghi_WP)

Central = (28.47090666, -80.8718205)
C_idx = nearest_site(tree, Central[0], Central[1] )

print("Site index for Central: \t\t {}".format(C_idx))
print("Coordinates of Central: \t {}".format(Central))
print("Coordinates of nearest point: \t {}".format(dset_coords[C_idx]))

# Get the entire 2017 timeseries data for a point in NE Florida
tseries = dset[:, C_idx] / dset.attrs['psm_scale_factor']

avg_ghi_C= np.average(tseries)
print(avg_ghi_C)
