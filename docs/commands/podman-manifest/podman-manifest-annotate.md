% podman-manifest-annotate 1

## NAME

podman\-manifest\-annotate - Add or update information about an entry in a manifest list or image index

## SYNOPSIS

**podman manifest annotate** [*options*] _listnameorindexname_ _imagemanifestdigest_

## DESCRIPTION

Adds or updates information about an image included in a manifest list or image index.

## OPTIONS

@@option annotation.manifest

#### **--arch**

Override the architecture which the list or index records as a requirement for
the image. This is usually automatically retrieved from the image's
configuration information, so it is rarely necessary to use this option.

@@option features

#### **--os**

Override the OS which the list or index records as a requirement for the image.
This is usually automatically retrieved from the image's configuration
information, so it is rarely necessary to use this option.

#### **--os-features**

Specify the OS features list which the list or index records as requirements
for the image. This option is rarely used.

@@option os-version

@@option variant.manifest

## EXAMPLE

```
podman manifest annotate --arch arm64 --variant v8 mylist:v11 sha256:59eec8837a4d942cc19a52b8c09ea75121acc38114a2c68b98983ce9356b8610
07ec8dc22b5dba3a33c60b68bce28bbd2b905e383fdb32a90708fa5eeac13a07: sha256:59eec8837a4d942cc19a52b8c09ea75121acc38114a2c68b98983ce9356b8610
```

## SEE ALSO

**[podman(1)](podman.md)**, **[podman-manifest(1)](commands/podman-manifest/podman-manifest.md)**
