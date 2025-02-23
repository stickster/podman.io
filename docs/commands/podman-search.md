% podman-search 1

## NAME

podman\-search - Search a registry for an image

## SYNOPSIS

**podman search** [*options*] _term_

## DESCRIPTION

**podman search** searches a registry or a list of registries for a matching image.
The user can specify which registry to search by prefixing the registry in the search term
(e.g., **registry.fedoraproject.org/fedora**). By default, all
unqualified-search registries in `containers-registries.conf(5)` are used.

The default number of results is 25. The number of results can be limited using the **--limit** flag.
If more than one registry is being searched, the limit will be applied to each registry. The output can be filtered
using the **--filter** flag. To get all available images in a registry without a specific
search term, the user can just enter the registry name with a trailing "/" (example **registry.fedoraproject.org/**).

Note that **podman search** is not a reliable way to determine the presence or existence of an image.
The search behavior of the v1 and v2 Docker distribution API is specific to the implementation of each registry.
Some registries may not support searching at all.
Further note that searching without a search term will only work for registries that implement the v2 API.

**podman [GLOBAL OPTIONS]**

**podman search [GLOBAL OPTIONS]**

**podman search [OPTIONS] TERM**

## OPTIONS

@@option authfile

@@option cert-dir

#### **--compatible**

After the name and the description, also show the stars, official and automated descriptors as Docker does.
Podman does not show these descriptors by default since they are not supported by most public container registries.

@@option creds

#### **--filter**, **-f**=_filter_

Filter output based on conditions provided (default [])

Supported filters are:

- stars (int - number of stars the image has)
- is-automated (boolean - true | false) - is the image automated or not
- is-official (boolean - true | false) - is the image official or not

#### **--format**=_format_

Change the output format to a Go template

Valid placeholders for the Go template are listed below:

| **Placeholder** | **Description**              |
| --------------- | ---------------------------- |
| .Automated      | "[OK]" if image is automated |
| .Description    | Image description            |
| .Index          | Registry                     |
| .Name           | Image name                   |
| .Official       | "[OK]" if image is official  |
| .Stars          | Star count of image          |
| .Tag            | Repository tag               |

Note: use .Tag only if the --list-tags is set.

#### **--help**, **-h**

Print usage statement

#### **--limit**=_limit_

Limit the number of results (default 25).
Note: The results from each registry will be limited to this value.
Example if limit is 10 and two registries are being searched, the total
number of results will be 20, 10 from each (if there are at least 10 matches in each).
The order of the search results is the order in which the API endpoint returns the results.

#### **--list-tags**

List the available tags in the repository for the specified image.
**Note:** --list-tags requires the search term to be a fully specified image name.
The result contains the Image name and its tag, one line for every tag associated with the image.

#### **--no-trunc**

Do not truncate the output (default _false_).

@@option tls-verify

## EXAMPLES

```
$ podman search --limit 3 fedora
NAME                                     DESCRIPTION
registry.centos.org/centos
registry.centos.org/cdrage/mosh-centos7
registry.centos.org/centos/bind
docker.io/library/centos                 The official build of CentOS.
docker.io/jdeathe/centos-ssh             OpenSSH / Supervisor / EPEL/IUS/SCL Repos - ...
docker.io/ansible/centos7-ansible        Ansible on Centos7
quay.io/centos/centos                    The official CentOS base containers.
quay.io/ukhomeofficedigital/centos-base
quay.io/quarkus/centos-quarkus-maven     Quarkus.io builder image for building Quarku...
```

Note that the Stars, Official and Automated descriptors are only available on Docker Hub and are hence not displayed by default.

```
$ podman search --format "{{.Name}}\t{{.Stars}}\t{{.Official}}" alpine --limit 3
docker.io/library/alpine       7956        [OK]
docker.io/alpine/git           192
docker.io/anapsix/alpine-java  474
quay.io/libpod/alpine          0
quay.io/vqcomms/alpine-tools   0
quay.io/wire/alpine-deps       0
```

```
$ podman search --list-tags registry.access.redhat.com/ubi8 --limit 4
NAME                             TAG
registry.access.redhat.com/ubi8  8.4-211
registry.access.redhat.com/ubi8  8.4-206.1626828523-source
registry.access.redhat.com/ubi8  8.4-199
registry.access.redhat.com/ubi8  8.4-211-source

```

Note: This works only with registries that implement the v2 API. If tried with a v1 registry an error will be returned.

## FILES

**registries.conf** (`/etc/containers/registries.conf`)

registries.conf is the configuration file which specifies which container registries should be consulted when completing image names which do not include a registry or domain portion.

## SEE ALSO

**[podman(1)](podman.md)**, **[containers-registries(5)](https://github.com/containers/image/blob/main/docs/containers-registries.5.md)**

## HISTORY

January 2018, Originally compiled by Urvashi Mohnani <umohnani@redhat.com>
