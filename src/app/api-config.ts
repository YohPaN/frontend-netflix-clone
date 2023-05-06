export interface ApiConfig {
  images: ImageConfig;
  change_keys: String[]
}

export interface ImageConfig {
  base_url: string;
  secure_base_url: string;
  backdrop_sizes: String[];
  logo_sizes: String[];
  poster_sizes: String[];
  profile_sizes: String[];
  still_sizes: String[];
}
