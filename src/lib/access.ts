type AccessArgs = {
  id?: number | string
  req: {
    user?: {
      id?: number | string
      role?: string
    } | null
  }
}

export const isAdmin = ({ req }: AccessArgs) => req.user?.role === 'admin'

export const isEditor = ({ req }: AccessArgs) =>
  req.user?.role === 'admin' || req.user?.role === 'editor'

export const isAdminOrSelf = ({ req, id }: AccessArgs) =>
  req.user?.role === 'admin' || (req.user?.id != null && id != null && String(req.user.id) === String(id))
