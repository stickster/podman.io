% podman-logout 1

## NAME

podman\-logout - Logout of a container registry

## SYNOPSIS

**podman logout** [*options*] _registry_

## DESCRIPTION

**podman logout** logs out of a specified registry server by deleting the cached credentials
stored in the **auth.json** file. If the registry is not specified, the first registry under [registries.search]
from registries.conf will be used. The path of the authentication file can be overridden by the user by setting the **authfile** flag.
The default path used is **${XDG_RUNTIME_DIR}/containers/auth.json**. For more details about format and configurations of the auth,json file, please refer to containers-auth.json(5)
All the cached credentials can be removed by setting the **all** flag.

**podman [GLOBAL OPTIONS]**

**podman logout [GLOBAL OPTIONS]**

**podman logout [OPTIONS] REGISTRY [GLOBAL OPTIONS]**

## OPTIONS

#### **--all**, **-a**

Remove the cached credentials for all registries in the auth file

@@option authfile

#### **--help**, **-h**

Print usage statement

## EXAMPLES

```
$ podman logout docker.io
Remove login credentials for https://registry-1.docker.io/v2/
```

```
$ podman logout --authfile authdir/myauths.json docker.io
Remove login credentials for https://registry-1.docker.io/v2/
```

```
$ podman logout --all
Remove login credentials for all registries
```

## SEE ALSO

**[podman(1)](podman.md)**, **[podman-login(1)](commands/podman-login.md)**, **[containers-auth.json(5)](https://github.com/containers/image/blob/main/docs/containers-auth.json.5.md)**

## HISTORY

August 2017, Originally compiled by Urvashi Mohnani <umohnani@redhat.com>
